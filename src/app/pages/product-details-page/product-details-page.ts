import { Component } from '@angular/core';
import { PageBanner } from "../../common/page-banner/page-banner";
import { NgClass } from '@angular/common';
import { QuantityCounter } from "../../common/quantity-counter/quantity-counter";

@Component({
    selector: 'app-product-details-page',
    imports: [PageBanner, NgClass, QuantityCounter],
    templateUrl: './product-details-page.html',
    styleUrl: './product-details-page.scss',
})
export class ProductDetailsPage {

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}