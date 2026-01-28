import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-testimonials',
    imports: [CarouselModule],
    templateUrl: './testimonials.html',
    styleUrl: './testimonials.scss',
})
export class Testimonials {

    constructor(
        public router: Router
    ) {}

    // Owl Carousel
    testimonialsSlider: OwlOptions = {
        items: 1,
		margin: 0,
		nav: true,
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

}