import { Component } from '@angular/core';
import { PageBanner } from "../../common/page-banner/page-banner";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-shop-page',
    imports: [RouterLink, PageBanner],
    templateUrl: './shop-page.html',
    styleUrl: './shop-page.scss',
})
export class ShopPage {}