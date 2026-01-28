import { Component } from '@angular/core';
import { PageBanner } from "../../common/page-banner/page-banner";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-checkout-page',
    imports: [PageBanner, RouterLink],
    templateUrl: './checkout-page.html',
    styleUrl: './checkout-page.scss',
})
export class CheckoutPage {}