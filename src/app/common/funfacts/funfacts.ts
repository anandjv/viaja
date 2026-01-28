import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-funfacts',
    imports: [],
    templateUrl: './funfacts.html',
    styleUrl: './funfacts.scss',
})
export class Funfacts {

    constructor(
        public router: Router
    ) {}

}