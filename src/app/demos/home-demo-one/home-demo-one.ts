import { Component } from '@angular/core';
import { Banner } from "./banner/banner";
import { Search } from "../../common/search/search";
import { PopularDestinations } from "../../common/popular-destinations/popular-destinations";
import { WhyChooseUs } from "../../common/why-choose-us/why-choose-us";
import { TextSlider } from "../../common/text-slider/text-slider";
import { FeaturedToursPackages } from "../../common/featured-tours-packages/featured-tours-packages";
import { Discount } from "../../common/discount/discount";
import { Feedback } from "../../common/feedback/feedback";
import { Funfacts } from "../../common/funfacts/funfacts";
import { HowItWorks } from "../../common/how-it-works/how-it-works";
import { Offer } from "../../common/offer/offer";
import { Blog } from "../../common/blog/blog";
import { Subscribe } from "../../common/subscribe/subscribe";
import { Instagram } from "../../common/instagram/instagram";

@Component({
    selector: 'app-home-demo-one',
    imports: [Banner, Search, PopularDestinations, WhyChooseUs, TextSlider, FeaturedToursPackages, Discount, Feedback, Funfacts, HowItWorks, Offer, Blog, Subscribe, Instagram],
    templateUrl: './home-demo-one.html',
    styleUrl: './home-demo-one.scss',
})
export class HomeDemoOne {}