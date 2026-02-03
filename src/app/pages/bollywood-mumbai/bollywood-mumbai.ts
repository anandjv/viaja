import { PageBanner } from '../../common/page-banner/page-banner';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Destination } from '../../admin-dashboard/wishlist/destination';
import { BookingForm } from '../booking-form/booking-form';

@Component({
  selector: 'app-bollywood-mumbai',
  imports: [CarouselModule, PageBanner, CommonModule, BookingForm],
  templateUrl: './bollywood-mumbai.html',
  styleUrl: './bollywood-mumbai.scss',
})
export class BollywoodMumbai {
   destination: any;
    highlightsArray: string[] = [];
    description!: SafeHtml;
    imageBaseUrl = 'https://www.inigotravels.com/uploads';

    constructor(
        private modalService: NgbModal,
        private destinationService: Destination,
        private sanitizer: DomSanitizer,
    ) {}

    ngOnInit(): void {
        this.loadTamilNadu();
        this.description = this.sanitizer.bypassSecurityTrustHtml(
            this.destination.description,
        );
    }

    loadTamilNadu(): void {
        this.destinationService.getDestinations().subscribe({
            next: (res: any[]) => {
                this.destination = res.find(
                    (d) => d.title?.toLowerCase().trim() === 'bollywood mumbai',
                );

                if (!this.destination) return;

                // ✅ Description (HTML safe)
                this.description = this.sanitizer.bypassSecurityTrustHtml(
                    this.destination.description || '',
                );

                // ✅ Highlights split (THIS WAS MISSING)
                if (this.destination.highlight) {
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = this.destination.highlight;

                    const text = tempDiv.textContent || '';

                    this.highlightsArray = text
                        .split('\n')
                        .map((item) => item.trim())
                        .filter((item) => item.length);
                }

                console.log('Highlights:', this.highlightsArray);
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
