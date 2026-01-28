import { Component } from '@angular/core';
import { PageBanner } from "../../common/page-banner/page-banner";
import { RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-tour-listing-list-view-page',
    imports: [RouterLink, PageBanner, NgStyle],
    templateUrl: './tour-listing-list-view-page.html',
    styleUrl: './tour-listing-list-view-page.scss',
})
export class TourListingListViewPage {

    // Limits & gap
    minLimit = 0;
    maxLimit = 1000;
    minGap = 50;

    // Current slider values
    rangeMin = 200;
    rangeMax = 800;

    // Display values
    minDisplay = 0;
    maxDisplay = 1000;

    // Bar background style
    barBackground = '';

    ngOnInit(): void {
        this.updateBar();
    }

    onMinInput(event: Event) {
        const value = Number((event.target as HTMLInputElement).value);
        this.rangeMin = value;
        this.updateBar();
    }

    onMaxInput(event: Event) {
        const value = Number((event.target as HTMLInputElement).value);
        this.rangeMax = value;
        this.updateBar();
    }

    private updateBar() {
        let min = this.rangeMin;
        let max = this.rangeMax;

        // Enforce minimum gap
        if (min > max - this.minGap) {
            min = max - this.minGap;
            this.rangeMin = min;
        }

        if (max < min + this.minGap) {
            max = min + this.minGap;
            this.rangeMax = max;
        }

        const percentMin = (min / this.maxLimit) * 100;
        const percentMax = (max / this.maxLimit) * 100;

        this.barBackground =
        `linear-gradient(to right, ` +
        `#ddd ${percentMin}% , ` +
        `var(--primaryColor, #3498db) ${percentMin}% , ` +
        `var(--primaryColor, #3498db) ${percentMax}%, ` +
        `#ddd ${percentMax}%)`;

        this.minDisplay = min;
        this.maxDisplay = max;
    }

}