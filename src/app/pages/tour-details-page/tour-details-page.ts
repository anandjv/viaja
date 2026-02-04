import { PageBanner } from '../../common/page-banner/page-banner';
import { ActivatedRoute } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingForm } from '../booking-form/booking-form';
import { TourList } from '../../admin-dashboard/tour-modal/tour-list';

@Component({
    selector: 'app-tour-details-page',
    imports: [CarouselModule, PageBanner, CommonModule, BookingForm],
    templateUrl: './tour-details-page.html',
    styleUrl: './tour-details-page.scss',
})
export class TourDetailsPage {
    destination: any = null;
    highlightsArray: string[] = [];
    imageBaseUrl = 'https://www.inigotravels.com/uploads';

    constructor(
        private destinationService: TourList,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));

      if (id) {
        this.loadDestination(id);
      }
    });
    }

 loadDestination(id: number) {
    this.destinationService.getTour().subscribe(res => {
      this.destination = res.find(d => Number(d.id) === id);
      if (this.destination?.highlights) {
        const div = document.createElement('div');
        div.innerHTML = this.destination.highlights;
        this.highlightsArray = div.innerText
          .split('\n')
          .map(v => v.trim())
          .filter(Boolean);
      }
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