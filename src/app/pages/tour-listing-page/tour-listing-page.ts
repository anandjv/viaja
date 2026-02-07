import { Component } from '@angular/core';
import { PageBanner } from '../../common/page-banner/page-banner';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { TourModal } from '../../admin-dashboard/tour-modal/tour-modal';
import { TourList } from '../../admin-dashboard/tour-modal/tour-list';
import { AuthService } from '../my-account-page/auth-service';

@Component({
    selector: 'app-tour-listing-page',
    imports: [RouterLink, PageBanner, RouterLink, CarouselModule, CommonModule],
    templateUrl: './tour-listing-page.html',
    styleUrl: './tour-listing-page.scss',
})
export class TourListingPage {
     destinations: any[] = [];
    paginatedData: any[] = [];
    currentPage = 1;
    itemsPerPage = 9;
    totalPages = 0;
    imageBaseUrl = 'https://www.inigotravels.com/uploads';

    constructor(
        private modalService: NgbModal,
        private destinationService: TourList,
         public authService: AuthService
    ) {}

    ngOnInit(): void {
        this.loadDestinations();
    }

    loadDestinations(): void {
        this.destinationService.getTour().subscribe((res) => {
            this.destinations = res;
            this.totalPages = Math.ceil(
                this.destinations.length / this.itemsPerPage,
            );
            this.setPage(1);
        });
    }

      isAdmin(): boolean {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        return user.role === 'admin';
    }

    setPage(page: number): void {
        if (page < 1 || page > this.totalPages) return;

        this.currentPage = page;

        const start = (page - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;

        this.paginatedData = this.destinations.slice(start, end);
    }

    nextPage(): void {
        this.setPage(this.currentPage + 1);
    }

    prevPage(): void {
        this.setPage(this.currentPage - 1);
    }

    trackByIndex(index: number): number {
        return index;
    }

openEditModal(dest: any) {
  const modalRef = this.modalService.open(TourModal, {
    size: 'lg',
    centered: true,
    backdrop: 'static',
  });

  modalRef.componentInstance.editData = dest;

  // ✅ LISTEN FOR MODAL RESULT
  modalRef.result.then(
    (result) => {
      if (result === 'success') {
        this.loadDestinations(); // 🔄 reload immediately
      }
    },
    () => {
      // dismissed
    }
  );
}

deleteTour(dest: any): void {

  if (!confirm(`Are you sure you want to delete "${dest.title}"?`)) {
    return;
  }

  this.destinationService.deleteTour(dest.id).subscribe({
    next: () => {

      // ✅ remove from local list (instant UI update)
      this.destinations = this.destinations.filter(
        t => t.id !== dest.id
      );

      // ✅ update pagination
      this.totalPages = Math.ceil(
        this.destinations.length / this.itemsPerPage
      );

      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages || 1;
      }

      this.setPage(this.currentPage);
    },
    error: (err) => {
      console.error('Delete failed', err);
      alert('Delete failed');
    }
  });
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