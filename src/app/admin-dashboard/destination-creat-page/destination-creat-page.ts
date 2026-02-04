import { Component } from '@angular/core';
import { Wishlist } from '../wishlist/wishlist';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Destination } from '../wishlist/destination';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-destination-creat-page',
    imports: [CommonModule, CarouselModule],
    templateUrl: './destination-creat-page.html',
    styleUrl: './destination-creat-page.scss',
})
export class DestinationCreatPage {
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
                // console.log('Destinations:', res);
            },
            error: (err) => {
                console.error('Error loading destinations', err);
            },
        });
    }

open() {
  const modalRef = this.modalService.open(Wishlist, {
    size: 'xl',
    centered: true,
    backdrop: 'static',
  });

  modalRef.result.then(result => {
    if (result === 'success') {
      this.loadDestinations(); // ✅ reload list
    }
  });
}


    trackByIndex(index: number): number {
        return index;
    }

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
