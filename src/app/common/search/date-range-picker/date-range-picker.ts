import { NgClass } from '@angular/common';
import {
    Component,
    ElementRef,
    HostListener,
} from '@angular/core';

interface DayCell {
    date: Date;
    isOtherMonth: boolean;
}

@Component({
    selector: 'app-date-range-picker',
    imports: [NgClass],
    templateUrl: './date-range-picker.html',
    styleUrl: './date-range-picker.scss',
})
export class DateRangePicker {

    open = false;

    private today = this.normalize(new Date());
    private monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    weekdays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    calendarMonth = this.today.getMonth();
    calendarYear = this.today.getFullYear();
    monthLabel = '';
    days: DayCell[] = [];

    // ✅ Start & end are now fully user-selectable
    selectedStartDate: Date | null = this.today;
    selectedEndDate: Date | null = null;

    constructor(private host: ElementRef<HTMLElement>) {
        this.buildCalendar();
    }

    // Input display text
    get displayValue(): string {
        const opts: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        };

        if (this.selectedStartDate && this.selectedEndDate) {
            const start = this.selectedStartDate.toLocaleDateString(undefined, opts);
            const end = this.selectedEndDate.toLocaleDateString(undefined, opts);
            return `${start} — ${end}`;
        } else if (this.selectedStartDate) {
            const start = this.selectedStartDate.toLocaleDateString(undefined, opts);
            // 👇 This is what shows by default: "current date —"
            return `${start} —`;
        }
        return '';
    }

    toggle() {
        this.open = !this.open;

        if (this.open) {
            const base = this.selectedStartDate ?? this.today;
            this.calendarMonth = base.getMonth();
            this.calendarYear = base.getFullYear();
            this.buildCalendar();
        }
    }

    prevMonth() {
        this.calendarMonth--;
        if (this.calendarMonth < 0) {
            this.calendarMonth = 11;
            this.calendarYear--;
        }
        this.buildCalendar();
    }

    nextMonth() {
        this.calendarMonth++;
        if (this.calendarMonth > 11) {
            this.calendarMonth = 0;
            this.calendarYear++;
        }
        this.buildCalendar();
    }

    // ✅ NEW: proper range selection logic
    onDayClick(cell: DayCell) {
        if (cell.isOtherMonth) return;

        const clicked = this.normalize(cell.date);
        const today = this.today;

        // block past dates
        if (clicked.getTime() < today.getTime()) return;

        // Case 1: no start OR we already have full range → new range
        if (!this.selectedStartDate || (this.selectedStartDate && this.selectedEndDate)) {
            this.selectedStartDate = clicked;
            this.selectedEndDate = null;
        }
        // Case 2: we have start but no end yet
        else if (this.selectedStartDate && !this.selectedEndDate) {
            const startTime = this.selectedStartDate.getTime();
            const clickedTime = clicked.getTime();

            if (clickedTime < startTime) {
                // clicked before start → treat as new start
                this.selectedStartDate = clicked;
            } else {
                // clicked same or after start → set as end
                this.selectedEndDate = clicked;
            }
        }

        this.buildCalendar();

        if (this.selectedStartDate && this.selectedEndDate) {
            this.open = false;
        }
    }

    isToday(cell: DayCell): boolean {
        return this.isSameDate(this.normalize(cell.date), this.today);
    }

    isStart(cell: DayCell): boolean {
        return !!(
            this.selectedStartDate &&
            this.isSameDate(this.normalize(cell.date), this.selectedStartDate)
        );
    }

    isEnd(cell: DayCell): boolean {
        return !!(
            this.selectedEndDate &&
            this.isSameDate(this.normalize(cell.date), this.selectedEndDate)
        );
    }

    isInRange(cell: DayCell): boolean {
        if (!this.selectedStartDate || !this.selectedEndDate) return false;

        const d = this.normalize(cell.date).getTime();
        const start = this.selectedStartDate.getTime();
        const end = this.selectedEndDate.getTime();

        return d > start && d < end;
    }

    // Close when clicking outside
    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
        if (!this.open) return;
        const target = event.target as HTMLElement;
        if (!this.host.nativeElement.contains(target)) {
            this.open = false;
        }
    }

    // === Helpers ===

    private buildCalendar() {
        this.days = [];

        this.monthLabel = `${this.monthNames[this.calendarMonth].substring(0, 3)} ${this.calendarYear}`;

        const firstDay = new Date(this.calendarYear, this.calendarMonth, 1);
        const lastDay = new Date(this.calendarYear, this.calendarMonth + 1, 0);
        const daysInMonth = lastDay.getDate();

        let firstDayOfWeek = firstDay.getDay(); // 0..6, Sun..Sat
        if (firstDayOfWeek === 0) firstDayOfWeek = 7; // make Monday=1..Sunday=7

        const prevMonthLastDay = new Date(this.calendarYear, this.calendarMonth, 0).getDate();

        // prefix (previous month)
        for (let i = firstDayOfWeek - 2; i >= 0; i--) {
            const day = prevMonthLastDay - i;
            const date = new Date(this.calendarYear, this.calendarMonth - 1, day);
            this.days.push({ date, isOtherMonth: true });
        }

        // current month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(this.calendarYear, this.calendarMonth, day);
            this.days.push({ date, isOtherMonth: false });
        }

        // suffix (next month) to fill 6×7
        const totalCells = this.days.length;
        const remainingCells = 42 - totalCells;
        for (let day = 1; day <= remainingCells; day++) {
            const date = new Date(this.calendarYear, this.calendarMonth + 1, day);
            this.days.push({ date, isOtherMonth: true });
        }
    }

    private normalize(d: Date): Date {
        return new Date(d.getFullYear(), d.getMonth(), d.getDate());
    }

    private isSameDate(a: Date, b: Date): boolean {
        return (
            a.getFullYear() === b.getFullYear() &&
            a.getMonth() === b.getMonth() &&
            a.getDate() === b.getDate()
        );
    }

}