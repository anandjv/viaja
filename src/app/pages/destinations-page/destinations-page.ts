import { Component } from '@angular/core';
import { PageBanner } from "../../common/page-banner/page-banner";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-destinations-page',
    imports: [RouterLink, PageBanner],
    templateUrl: './destinations-page.html',
    styleUrl: './destinations-page.scss',
})
export class DestinationsPage {}