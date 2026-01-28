import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-categories',
    imports: [RouterLink, CarouselModule],
    templateUrl: './categories.html',
    styleUrl: './categories.scss',
})
export class Categories {

    constructor(
        public router: Router
    ) {}

    // Owl Carousel
    categoriesSlider: OwlOptions = {
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
				items: 5
			}
		}
    }

}