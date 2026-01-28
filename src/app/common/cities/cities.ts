import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-cities',
    imports: [RouterLink, CarouselModule],
    templateUrl: './cities.html',
    styleUrl: './cities.scss',
})
export class Cities {

    // Owl Carousel
    citiesSlider: OwlOptions = {
        items: 1,
		margin: 0,
		nav: false,
        loop: true,
		dots: false,
		autoplay: true,
        animateIn: 'fadeIn',
        autoplayTimeout: 4000,
        animateOut: 'fadeOut',
		autoplayHoverPause: true,
        navText: [
            "<i class='ri-arrow-left-long-line'></i>",
            "<i class='ri-arrow-right-long-line'></i>"
        ]
    }
    citiesSlider2: OwlOptions = {
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
			}
		}
    }

}