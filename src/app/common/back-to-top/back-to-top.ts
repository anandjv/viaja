import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-back-to-top',
    imports: [],
    templateUrl: './back-to-top.html',
    styleUrl: './back-to-top.scss'
})
export class BackToTop {

    // Back to Top
    isShow: boolean = false;
    topPosToStartShowing = 100;
    @HostListener('window:scroll')
    checkScroll() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        this.isShow = scrollPosition >= this.topPosToStartShowing;
    }
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

}