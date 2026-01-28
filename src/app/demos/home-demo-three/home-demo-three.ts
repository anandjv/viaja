import { Component } from '@angular/core';
import { Banner } from "./banner/banner";
import { FeaturedTours } from "../../common/featured-tours/featured-tours";
import { WhyChooseUs } from "../../common/why-choose-us/why-choose-us";
import { Categories } from "../../common/categories/categories";
import { Destinations } from "../../common/destinations/destinations";
import { HowItWorks } from "../../common/how-it-works/how-it-works";
import { Testimonials } from "../../common/testimonials/testimonials";
import { Blog } from "../../common/blog/blog";
import { Overview } from "../../common/overview/overview";
import { Faq } from "../../common/faq/faq";

@Component({
	selector: 'app-home-demo-three',
	imports: [Banner, FeaturedTours, WhyChooseUs, Categories, Destinations, HowItWorks, Testimonials, Blog, Overview, Faq],
	templateUrl: './home-demo-three.html',
	styleUrl: './home-demo-three.scss',
})
export class HomeDemoThree {}