import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-offer',
    imports: [RouterLink],
    templateUrl: './offer.html',
    styleUrl: './offer.scss',
})
export class Offer {

    constructor(
        public router: Router
    ) {}

}