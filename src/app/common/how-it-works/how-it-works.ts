import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-how-it-works',
    imports: [CarouselModule],
    templateUrl: './how-it-works.html',
    styleUrl: './how-it-works.scss',
})
export class HowItWorks {

    constructor(
        public router: Router
    ) {}

    // Owl Carousel
    partnersSlider: OwlOptions = {
		nav: false,
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
				items: 2
			},
			516: {
				items: 3
			},
			696: {
				items: 4
			},
			936: {
				items: 5
			},
			1116: {
				items: 6
			}
		}
    }

}