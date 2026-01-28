import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageBanner } from "../../common/page-banner/page-banner";

@Component({
    selector: 'app-tour-listing-half-map-page',
    imports: [RouterLink, PageBanner],
    templateUrl: './tour-listing-half-map-page.html',
    styleUrl: './tour-listing-half-map-page.scss',
})
export class TourListingHalfMapPage {}