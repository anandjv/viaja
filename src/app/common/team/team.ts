import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-team',
    imports: [CarouselModule],
    templateUrl: './team.html',
    styleUrl: './team.scss',
})
export class Team {

    constructor(
        public router: Router
    ) {}

    // Owl Carousel
    teamSlider: OwlOptions = {
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
				items: 2
			},
			936: {
				items: 3
			},
			1116: {
				items: 3
			}
		}
    }

}