import { Component } from '@angular/core';
import { PageBanner } from "../../common/page-banner/page-banner";
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-my-account-page',
    imports: [RouterLink, PageBanner, NgClass],
    templateUrl: './my-account-page.html',
    styleUrl: './my-account-page.scss',
})
export class MyAccountPage {

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}