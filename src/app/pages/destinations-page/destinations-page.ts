import { Component } from '@angular/core';
import { PageBanner } from '../../common/page-banner/page-banner';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Destination } from '../../admin-dashboard/wishlist/destination';
import { Wishlist } from '../../admin-dashboard/wishlist/wishlist';

@Component({
    selector: 'app-destinations-page',
    imports: [RouterLink, PageBanner, RouterLink, CarouselModule, CommonModule],
    templateUrl: './destinations-page.html',
    styleUrl: './destinations-page.scss',
})
export class DestinationsPage {
    destinations: any[] = [];
    paginatedData: any[] = [];
    currentPage = 1;
    itemsPerPage = 9;
    totalPages = 0;
    imageBaseUrl = 'https://www.inigotravels.com/uploads';

    constructor(
        private modalService: NgbModal,
        private destinationService: Destination,
    ) {}

    ngOnInit(): void {
        this.loadDestinations();
    }

    loadDestinations(): void {
        this.destinationService.getDestinations().subscribe((res) => {
            this.destinations = res;
            this.totalPages = Math.ceil(
                this.destinations.length / this.itemsPerPage,
            );
            this.setPage(1);
        });
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
        const modalRef = this.modalService.open(Wishlist, {
            size: 'lg',
            centered: true,
            backdrop: 'static',
        });

        modalRef.componentInstance.editData = dest;

        // ✅ LISTEN FOR MODAL CLOSE
        modalRef.result.then(
            (result) => {
                if (result === 'success') {
                    this.loadDestinations(); // 🔄 reload immediately
                }
            },
            () => {
                // dismissed (ESC / backdrop click)
            },
        );
    }

    deleteDestination(id: number): void {
        if (!confirm('Are you sure you want to delete this destination?')) {
            return;
        }

        this.destinationService.deleteDestination(id).subscribe({
            next: (res: any) => {
                alert(res.message || 'Deleted successfully');

                // ✅ REMOVE FROM LIST (instant UI update)
                this.destinations = this.destinations.filter(
                    (d) => d.id !== id,
                );

                // ✅ RE-CALCULATE PAGINATION
                this.totalPages = Math.ceil(
                    this.destinations.length / this.itemsPerPage,
                );

                // ✅ KEEP CURRENT PAGE VALID
                if (this.currentPage > this.totalPages) {
                    this.currentPage = this.totalPages || 1;
                }

                this.setPage(this.currentPage);
            },
            error: (err) => {
                console.error(err);
                alert('Delete failed');
            },
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
