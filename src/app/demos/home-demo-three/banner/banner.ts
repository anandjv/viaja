import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-banner',
    imports: [RouterLink, CarouselModule],
    templateUrl: './banner.html',
    styleUrl: './banner.scss',
})
export class Banner {

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

    // Owl Carousel
    bannerSlider: OwlOptions = {
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
			576: {
				items: 3
			},
			728: {
				items: 4
			},
			992: {
				items: 5
			},
			1200: {
				items: 6
			},
			1400: {
				items: 7
			}
		}
    }

}