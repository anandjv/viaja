import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-popular-destinations',
    imports: [NgClass, RouterLink, CarouselModule],
    templateUrl: './popular-destinations.html',
    styleUrl: './popular-destinations.scss',
})
export class PopularDestinations {

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

    // Owl Carousel
    destinationsSlider: OwlOptions = {
		nav: false,
		margin: 24,
		dots: true,
        loop: false,
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