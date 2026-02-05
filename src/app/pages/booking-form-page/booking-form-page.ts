import { Component } from '@angular/core';
import { PageBanner } from '../../common/page-banner/page-banner';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Leads } from '../../admin-dashboard/booking/leads';

@Component({
  selector: 'app-booking-form-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PageBanner],
  templateUrl: './booking-form-page.html',
  styleUrl: './booking-form-page.scss',
})
export class BookingFormPage {
  bookingForm!: FormGroup;
  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private leadsService: Leads) {
    this.bookingForm = this.fb.group({
      first_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  submit() {
    if (this.bookingForm.invalid) {
      this.bookingForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.leadsService.createLead(this.bookingForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.successMessage = 'Form submitted successfully!';
        this.bookingForm.reset();
      },
      error: () => {
        this.loading = false;
        this.errorMessage = 'Something went wrong. Please try again.';
      },
    });
  }
}
