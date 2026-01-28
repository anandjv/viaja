import { Component } from '@angular/core';
import { PageBanner } from "../../common/page-banner/page-banner";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-categories-page',
    imports: [PageBanner, RouterLink],
    templateUrl: './categories-page.html',
    styleUrl: './categories-page.scss',
})
export class CategoriesPage {}