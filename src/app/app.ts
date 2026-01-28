import { filter } from 'rxjs';
import { Navbar } from "./common/navbar/navbar";
import { Footer } from "./common/footer/footer";
import { ViewportScroller } from '@angular/common';
import { TopHeader } from "./common/top-header/top-header";
import { BackToTop } from "./common/back-to-top/back-to-top";
import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { RouterOutlet, Router, Event, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, TopHeader, Navbar, Footer, BackToTop],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {

    protected readonly title = signal('Viaja - Angular 20 Travel & Tour Booking Template');

    private previousUrl: string | null = null;

    constructor(
        public router: Router,
        private cdr: ChangeDetectorRef,
        private viewportScroller: ViewportScroller
    ) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                const currentUrl = event.urlAfterRedirects;
                // Scroll to top ONLY if navigating to a different route (not on refresh)
                if (this.previousUrl && this.previousUrl !== currentUrl) {
                    this.viewportScroller.scrollToPosition([0, 0]);
                }
                this.previousUrl = currentUrl;
            }
        });
        // Re-mount navbar on every successful navigation
        this.router.events
        .pipe(filter(e => e instanceof NavigationEnd))
        .subscribe(() => this.remountNavbar());
    }

    // Controls remounting
    navbarAlive = true;
    private remountNavbar() {
        // Toggle *ngIf off then on to force destroy/recreate
        this.navbarAlive = false;
        this.cdr.detectChanges(); // flush view so Angular processes the removal
        this.navbarAlive = true;
    }

}