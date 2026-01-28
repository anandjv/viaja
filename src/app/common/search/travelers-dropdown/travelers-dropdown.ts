import { Component, HostListener } from '@angular/core';

interface TravelerCounts {
    adult: number;
    youth: number;
    child: number;
}

@Component({
    selector: 'app-travelers-dropdown',
    imports: [],
    templateUrl: './travelers-dropdown.html',
    styleUrl: './travelers-dropdown.scss',
})
export class TravelersDropdown {

    counts: TravelerCounts = { adult: 0, youth: 0, child: 0 };
    appliedTotal = 0;
    open = false; // 👈 new state for open/close

    get label(): string {
        if (this.appliedTotal > 0) {
            return `${this.appliedTotal} Travelers`;
        }
        return 'Number of Travelers';
    }

    change(type: keyof TravelerCounts, delta: 1 | -1) {
        const next = this.counts[type] + delta;
        this.counts[type] = Math.max(0, next);
    }

    apply() {
        this.appliedTotal =
        this.counts.adult + this.counts.youth + this.counts.child;
        this.open = false; // close manually on Apply
    }

    // toggle state on click
    toggleOpen() {
        this.open = !this.open;
    }

    // close when clicking outside
    @HostListener('document:click', ['$event'])
    onClickOutside(event: MouseEvent) {
        const target = event.target as HTMLElement;
        const inside = target.closest('.traveler-dropdown-wrapper');
        if (!inside) {
            this.open = false;
        }
    }

}