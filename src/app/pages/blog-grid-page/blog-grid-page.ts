import { Component } from '@angular/core';
import { PageBanner } from "../../common/page-banner/page-banner";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog-grid-page',
    imports: [RouterLink, PageBanner],
    templateUrl: './blog-grid-page.html',
    styleUrl: './blog-grid-page.scss',
})
export class BlogGridPage {}