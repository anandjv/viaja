import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { TourModal } from '../tour-modal/tour-modal';
import { TourList } from '../tour-modal/tour-list';

@Component({
  selector: 'app-creat-tour-list',
  imports: [CommonModule, CarouselModule],
  templateUrl: './creat-tour-list.html',
  styleUrl: './creat-tour-list.scss',
})
export class CreatTourList {
 destinations: any[] = [];
    imageBaseUrl = 'https://www.inigotravels.com/uploads';

    constructor(
        private modalService: NgbModal,
        private tourService: TourList,
    ) {}

    ngOnInit(): void {
        this.loadDestinations();
    }

    loadDestinations(): void {
        this.tourService.getTour().subscribe({
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
        this.modalService.open(TourModal, {
            size: 'xl',
            centered: true,
            backdrop: 'static',
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
