import { PageBanner } from '../../common/page-banner/page-banner';
import { ActivatedRoute, RouterLink } from '@angular/router';
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
    destination: any = null;
    highlightsArray: string[] = [];
    imageBaseUrl = 'https://www.inigotravels.com/uploads';

    constructor(
        private destinationService: Destination,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            const id = Number(params.get('id'));

            if (id) {
                this.loadDestination(id);
            }
        });
    }

    // loadDestination(id: number) {
    //     this.destinationService.getDestinations().subscribe((res) => {
    //         this.destination = res.find((d) => Number(d.id) === id);

    //         if (this.destination?.highlight) {
    //             const div = document.createElement('div');
    //             div.innerHTML = this.destination.highlight;
    //             this.highlightsArray = div.innerText
    //                 .split('\n')
    //                 .map((v) => v.trim())
    //                 .filter(Boolean);
    //         }
    //     });
    // }

loadDestination(id: number) {
    this.destinationService.getDestinationById(id).subscribe((res: any) => {

        // IMPORTANT
        this.destination = res.data;

        // Highlights
        if (this.destination?.highlight) {
            this.highlightsArray = this.destination.highlight
                .split('\r\n')
                .map((v: string) => v.trim())
                .filter(Boolean);
        }

        console.log('Images:', this.destination.images);
    });
}


trackById(index: number, item: any) {
    return item.id;
}

resolveImageUrl(url: string): string {
    if (!url) return '';

    // Remove localhost backend URL
    if (url.includes('localhost:8080')) {
        const filename = url.split('/uploads/')[1];
        return `https://www.inigotravels.com/bknd/uploads/${filename}`;
    }

    // Already correct
    return url;
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
