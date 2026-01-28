import { Component } from '@angular/core';
import { PageBanner } from "../../common/page-banner/page-banner";
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-tour-details-page',
    imports: [PageBanner, RouterLink, NgClass],
    templateUrl: './tour-details-page.html',
    styleUrl: './tour-details-page.scss',
})
export class TourDetailsPage {

    // Accordion
    contentHeight: number = 0;
    openSectionIndex: number = 0; // Set the first item as open by default
    toggleSection(index: number): void {
        if (this.openSectionIndex === index) {
            this.openSectionIndex = -1; // Close if the same section is clicked
        } else {
            this.openSectionIndex = index; // Open the clicked section
        }
    }
    isSectionOpen(index: number): boolean {
        return this.openSectionIndex === index;
    }

}