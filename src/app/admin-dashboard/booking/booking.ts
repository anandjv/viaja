import { Component } from '@angular/core';

@Component({
    selector: 'app-booking',
    imports: [],
    templateUrl: './booking.html',
    styleUrl: './booking.scss',
})
export class Booking {

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}