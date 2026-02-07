import { Component } from '@angular/core';
import { Leads } from './leads';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-booking',
    imports: [CommonModule],
    templateUrl: './booking.html',
    styleUrl: './booking.scss',
})
export class Booking {
    leads: any[] = [];
    paginatedLeads: any[] = [];

    currentPage = 1;
    itemsPerPage = 9;
    totalPages = 0;

    constructor(private leadsService: Leads) {}

    ngOnInit(): void {
        this.loadLeads();
    }

    loadLeads(): void {
        this.leadsService.getLeads().subscribe({
            next: (res) => {
                this.leads = res.data || [];
                this.totalPages = Math.ceil(
                    this.leads.length / this.itemsPerPage,
                );
                this.setPage(1);
            },
            error: (err) => console.error(err),
        });
    }

    setPage(page: number): void {
        if (page < 1 || page > this.totalPages) return;

        this.currentPage = page;

        const start = (page - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;

        this.paginatedLeads = this.leads.slice(start, end);
    }

    nextPage(): void {
        this.setPage(this.currentPage + 1);
    }

    prevPage(): void {
        this.setPage(this.currentPage - 1);
    }

    deleteLead(id: number): void {
        if (!confirm('Delete this booking?')) return;

        // remove from list
        this.leads = this.leads.filter((l) => l.id !== id);

        // 🔁 recalculate pagination
        this.totalPages = Math.ceil(this.leads.length / this.itemsPerPage);

        // ⛔ prevent invalid page (when last item deleted)
        if (this.currentPage > this.totalPages) {
            this.currentPage = this.totalPages || 1;
        }

        // refresh page data
        this.setPage(this.currentPage);
    }

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }
}
