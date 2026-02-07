import { Component } from '@angular/core';
import { Leads } from './leads';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-booking',
    imports: [CommonModule, FormsModule],
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

deleteLead(id: number) {
  this.leadsService.deleteLead(id).subscribe({
    next: () => {
      alert('Lead deleted');
      this.loadLeads();
    },
    error: err => console.error(err)
  });
}

showMessagePopup = false;
selectedMessage = '';

openMessagePopup(message: string) {
  this.selectedMessage = message || 'No message available';
  this.showMessagePopup = true;
}

closeMessagePopup() {
  this.showMessagePopup = false;
  this.selectedMessage = '';
}

showEditPopup = false;
selectedLead: any = null;

openEditPopup(lead: any) {
  this.selectedLead = { ...lead }; // clone to avoid instant table update
  this.showEditPopup = true;
}

closeEditPopup() {
  this.showEditPopup = false;
  this.selectedLead = null;
}

saveAssignedTo() {
  if (!this.selectedLead) return;

  const payload = {
    id: this.selectedLead.id,
    name: this.selectedLead.name,
    email: this.selectedLead.email,
    mobile: this.selectedLead.mobile,
    message: this.selectedLead.message,
    source: this.selectedLead.source,
    status: this.selectedLead.status,
    assigned_to: this.selectedLead.assigned_to
  };

  this.leadsService.updateLead(this.selectedLead.id, payload)
    .subscribe({
      next: () => {
        alert('Lead updated successfully');
        this.closeEditPopup();
        this.loadLeads();
      },
      error: (err) => {
        console.error('Update failed', err);
      }
    });
}

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }
}
