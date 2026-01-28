import { Component } from '@angular/core';
import { PageBanner } from "../../common/page-banner/page-banner";
import { Faq } from "../../common/faq/faq";

@Component({
    selector: 'app-faq-page',
    imports: [PageBanner, Faq],
    templateUrl: './faq-page.html',
    styleUrl: './faq-page.scss',
})
export class FaqPage {}