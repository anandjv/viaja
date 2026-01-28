import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { DateRangePicker } from './date-range-picker/date-range-picker';
import { TravelersDropdown } from './travelers-dropdown/travelers-dropdown';

@Component({
    selector: 'app-search',
    imports: [NgClass, DateRangePicker, TravelersDropdown],
    templateUrl: './search.html',
    styleUrl: './search.scss',
})
export class Search {

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}