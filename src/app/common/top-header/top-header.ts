import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-top-header',
    imports: [],
    templateUrl: './top-header.html',
    styleUrl: './top-header.scss',
})
export class TopHeader {

    constructor(
        public router: Router
    ) {}

    // Language Toggle Class
    classLanguageSwitcherApplied = false;
    toggleLanguageSwitcherClass() {
        this.classLanguageSwitcherApplied = !this.classLanguageSwitcherApplied;
    }

}