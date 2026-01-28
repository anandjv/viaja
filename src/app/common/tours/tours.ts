import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-tours',
    imports: [RouterLink, CarouselModule],
    templateUrl: './tours.html',
    styleUrl: './tours.scss',
})
export class Tours {

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