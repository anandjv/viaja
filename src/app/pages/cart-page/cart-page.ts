import { Component } from '@angular/core';
import { PageBanner } from "../../common/page-banner/page-banner";
import { RouterLink } from '@angular/router';
import { QuantityCounter } from "../../common/quantity-counter/quantity-counter";

@Component({
    selector: 'app-cart-page',
    imports: [PageBanner, RouterLink, QuantityCounter],
    templateUrl: './cart-page.html',
    styleUrl: './cart-page.scss',
})
export class CartPage {}