import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-partners',
    imports: [CarouselModule],
    templateUrl: './partners.html',
    styleUrl: './partners.scss',
})
export class Partners {

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
				items: 7
			}
		}
    }

}