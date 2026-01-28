import { Component } from '@angular/core';
import { PageBanner } from "../../common/page-banner/page-banner";
import { Feedback } from "../../common/feedback/feedback";
import { Testimonials } from "../../common/testimonials/testimonials";

@Component({
    selector: 'app-testimonials-page',
    imports: [PageBanner, Feedback, Testimonials],
    templateUrl: './testimonials-page.html',
    styleUrl: './testimonials-page.scss',
})
export class TestimonialsPage {}