import { Component } from '@angular/core';
import { PageBanner } from '../../common/page-banner/page-banner';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Leads } from '../../admin-dashboard/booking/leads';

@Component({
  selector: 'app-booking-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.scss',
})
export class BookingForm {
 bookingForm!: FormGroup;
  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private leadsService: Leads) {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
       mobile: [
    '',
    [
      Validators.required,
      Validators.pattern(/^[0-9]{10}$/)
    ]
  ],
      message: ['', Validators.required],
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
