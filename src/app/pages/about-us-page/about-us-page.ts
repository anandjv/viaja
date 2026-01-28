import { Component } from '@angular/core';
import { PageBanner } from "../../common/page-banner/page-banner";
import { AboutUs } from "../../common/about-us/about-us";
import { Funfacts } from "../../common/funfacts/funfacts";
import { WhyChooseUs } from "../../common/why-choose-us/why-choose-us";
import { Feedback } from "../../common/feedback/feedback";
import { Team } from "../../common/team/team";
import { Values } from "../../common/values/values";

@Component({
    selector: 'app-about-us-page',
    imports: [PageBanner, AboutUs, Funfacts, WhyChooseUs, Feedback, Team, Values],
    templateUrl: './about-us-page.html',
    styleUrl: './about-us-page.scss',
})
export class AboutUsPage {}