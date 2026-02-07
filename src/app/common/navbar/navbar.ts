import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../pages/my-account-page/auth-service';

@Component({
    selector: 'app-navbar',
    imports: [RouterLink, RouterLinkActive, NgClass],
    templateUrl: './navbar.html',
    styleUrl: './navbar.scss',
})
export class Navbar {

    constructor(
        public router: Router,
        public authService: AuthService
    ) {}

    // Navbar Sticky
    isSticky: boolean = false;
    @HostListener('window:scroll')
    checkScroll() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

    // Navbar Menu Toggle Class
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    // Search Popup Toggle Class
    classSearchPopupApplied = false;
    toggleSearchPopupClass() {
        this.classSearchPopupApplied = !this.classSearchPopupApplied;
    }
    
    get isLoggedIn(): boolean {
        return this.authService.isLoggedIn();
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/my-account']);
    }
}