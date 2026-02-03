import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-blog',
    imports: [RouterLink, CarouselModule],
    templateUrl: './blog.html',
    styleUrl: './blog.scss',
})
export class Blog {

    constructor(
        public router: Router
    ) {}

	  // Owl Carousel
    toursSlider: OwlOptions = {
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
				items: 1
			},
			696: {
				items: 2
			},
			936: {
				items: 3
			},
			1116: {
				items: 4
			}
		}
    }

}