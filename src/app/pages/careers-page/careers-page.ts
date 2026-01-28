import { Component } from '@angular/core';
import { PageBanner } from "../../common/page-banner/page-banner";
import { Values } from "../../common/values/values";
import { WhyChooseUs } from "../../common/why-choose-us/why-choose-us";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-careers-page',
    imports: [RouterLink, PageBanner, Values, WhyChooseUs],
    templateUrl: './careers-page.html',
    styleUrl: './careers-page.scss',
})
export class CareersPage {}