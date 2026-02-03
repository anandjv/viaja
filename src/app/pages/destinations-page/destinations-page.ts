import { Component } from '@angular/core';
import { PageBanner } from "../../common/page-banner/page-banner";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Destination } from '../../admin-dashboard/wishlist/destination';

@Component({
    selector: 'app-destinations-page',
    imports: [RouterLink, PageBanner, RouterLink, CarouselModule, CommonModule],
    templateUrl: './destinations-page.html',
    styleUrl: './destinations-page.scss',
})
export class DestinationsPage {
     destinations: any[] = [];
    imageBaseUrl = 'https://www.inigotravels.com/uploads';

    constructor(
        private modalService: NgbModal,
        private destinationService: Destination,
    ) {}

    ngOnInit(): void {
        this.loadDestinations();
    }

    loadDestinations(): void {
        this.destinationService.getDestinations().subscribe({
            next: (res: any[]) => {
                this.destinations = res;
                console.log('Destinations:', res);
            },
            error: (err) => {
                console.error('Error loading destinations', err);
            },
        });
    }
    trackByIndex(index: number): number {
        return index;
    }

getRoute(dest: any): string {
    if (!dest?.title) return '/';

    const title = dest.title.toLowerCase().trim();

    if (title === 'tamil nadu') return '/tamil-nadu';
    if (title === 'karnataka') return '/karnataka';
    if (title === 'kerala') return '/kerala';
    if (title === 'telangana') return '/telangana';
    if (title === 'india’s golden triangle') return '/golden-triangle';
    if (title === 'jammu and kashmir') return '/jammu-and-kashmir';
    if (title === 'bollywood mumbai') return '/bollywood-mumbai';
    if (title === 'punjab') return '/punjab';
    if (title === 'goa') return '/goa';

    return '/';
}



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
                items: 4,
            },
        },
    };
}