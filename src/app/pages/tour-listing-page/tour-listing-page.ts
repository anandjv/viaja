import { Component } from '@angular/core';
import { PageBanner } from "../../common/page-banner/page-banner";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-tour-listing-page',
    imports: [PageBanner, RouterLink],
    templateUrl: './tour-listing-page.html',
    styleUrl: './tour-listing-page.scss',
})
export class TourListingPage {}