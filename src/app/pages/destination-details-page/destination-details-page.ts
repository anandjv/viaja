import { PageBanner } from '../../common/page-banner/page-banner';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Destination } from '../../admin-dashboard/wishlist/destination';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BookingForm } from '../booking-form/booking-form';

@Component({
    selector: 'app-destination-details-page',
    imports: [CarouselModule, PageBanner, CommonModule, BookingForm],
    templateUrl: './destination-details-page.html',
    styleUrl: './destination-details-page.scss',
})
export class DestinationDetailsPage implements OnInit {
    destinations: any = null;
    highlightsArray: string[] = [];
    description!: SafeHtml;
    imageBaseUrl = 'https://www.inigotravels.com/uploads';

    constructor(
        private modalService: NgbModal,
        private destinationService: Destination,
        private sanitizer: DomSanitizer,
    ) {}

    ngOnInit(): void {
        this.loadDestinations();
        this.description = this.sanitizer.bypassSecurityTrustHtml(
            this.destinations.description,
        );
    }

    loadDestinations(): void {
        this.destinationService.getDestinations().subscribe({
            next: (res: any[]) => {
                this.destinations = res[0];

                if (this.destinations.highlight) {
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = this.destinations.highlight;

                    const text = tempDiv.textContent || '';

                    this.highlightsArray = text
                    .split('\n')              // ✅ NEWLINE
                    .map(item => item.trim())
                    .filter(item => item.length);
                }
            },
            error: (err) => console.error(err),
        });
    }

    // Owl Carousel
    destinationDetailsImageSlider: OwlOptions = {
        nav: true,
        margin: 24,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: [
            "<i class='ri-arrow-left-long-line'></i>",
            "<i class='ri-arrow-right-long-line'></i>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            516: {
                items: 1,
            },
            696: {
                items: 2,
            },
            936: {
                items: 3,
            },
            1116: {
                items: 3,
            },
        },
    };
}
