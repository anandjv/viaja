import { Component } from '@angular/core';
import { Banner } from "./banner/banner";
import { Tours } from "../../common/tours/tours";
import { AboutUs } from "../../common/about-us/about-us";
import { Cities } from "../../common/cities/cities";
import { WhyChooseUs } from "../../common/why-choose-us/why-choose-us";
import { HowItWorks } from "../../common/how-it-works/how-it-works";
import { Team } from "../../common/team/team";
import { Testimonials } from "../../common/testimonials/testimonials";
import { Partners } from "../../common/partners/partners";
import { ShortTrips } from '../../common/short-trips/short-trips';


@Component({
    selector: 'app-home-demo-two',
    imports: [Banner, Tours, AboutUs, Cities, WhyChooseUs, HowItWorks, Team, Testimonials, Partners, ShortTrips],
    templateUrl: './home-demo-two.html',
    styleUrl: './home-demo-two.scss',
})
export class HomeDemoTwo {}