import { Component } from '@angular/core';
import { Offer } from "../offer/offer";
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-destinations',
    imports: [Offer, RouterLink, CarouselModule],
    templateUrl: './destinations.html',
    styleUrl: './destinations.scss',
})
export class Destinations {

    // Owl Carousel
    destinationsSlider: OwlOptions = {
		nav: true,
		margin: 24,
        loop: true,
		dots: false,
		autoplay: true,
        autoplayTimeout: 4000,
		autoplayHoverPause: true,
        navText: [
            "<i class='ri-arrow-left-long-line'></i>",
            "<i class='ri-arrow-right-long-line'></i>"
        ],
		responsive: {
			0: {
				items: 1
			},
			516: {
				items: 2
			},
			696: {
				items: 3
			},
			936: {
				items: 4
			},
			1116: {
				items: 4.5
			}
		}
    }

}