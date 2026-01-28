import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-faq',
    imports: [RouterLink, NgClass],
    templateUrl: './faq.html',
    styleUrl: './faq.scss',
})
export class Faq {

    constructor(
        public router: Router
    ) {}

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