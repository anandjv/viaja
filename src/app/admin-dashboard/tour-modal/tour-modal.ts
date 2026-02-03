import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';
import {
    ReactiveFormsModule,
    FormBuilder,
    Validators,
    AbstractControl,
    ValidationErrors,
    FormArray,
} from '@angular/forms';
import { TourList } from './tour-list';

@Component({
    selector: 'app-tour-modal',
    imports: [CommonModule, CarouselModule, QuillModule, ReactiveFormsModule],
    templateUrl: './tour-modal.html',
    styleUrl: './tour-modal.scss',
})
export class TourModal {
    form!: any;
    imageFile: File | null = null;
    successMessage = '';
    errorMessage = '';

    constructor(
        public activeModal: NgbActiveModal,
        private fb: FormBuilder,
        private tourService: TourList,
    ) {}

    ngOnInit(): void {
        this.initForm();
    }

    /* -----------------------
       FORM INIT
    ------------------------*/

    initForm() {
        this.form = this.fb.group({
            stateTitle: ['', [Validators.required, this.stateTitleValidator]],
            subheading: ['', Validators.required],
            attractions: ['', Validators.required],
            highlights: this.fb.array([]), // ✅ FormArray
            image: [null, Validators.required],
        });

        // ✅ Create 9 empty highlight fields
        this.addHighlight();
    }

    /* -----------------------
       CUSTOM VALIDATOR
    ------------------------*/
    stateTitleValidator(control: AbstractControl): ValidationErrors | null {
        if (!control.value) return null;

        return control.value.trim().length < 3
            ? { stateTitleInvalid: true }
            : null;
    }

    /* -----------------------
       FILE CHANGE
    ------------------------*/
    onFileChange(event: any) {
        const file = event.target.files[0];
        if (file) {
            this.imageFile = file;
            this.form.patchValue({ image: file });
            this.form.get('image')?.updateValueAndValidity();
        }
    }

    get highlights(): FormArray {
        return this.form.get('highlights') as FormArray;
    }

    addHighlight() {
        if (this.highlights.length < 15) {
            // ✅ max 9
            this.highlights.push(this.fb.control('', Validators.required));
        }
    }

    removeHighlight(index: number) {
        if (this.highlights.length > 1) {
            this.highlights.removeAt(index);
        }
    }

    /* -----------------------
       SAVE
    ------------------------*/
save() {
  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }

  const formData = new FormData();

  const highlightsText = this.highlights.value
    .filter((h: string) => h.trim() !== '')
    .join('\n');

  formData.append('title', this.form.value.stateTitle);
  formData.append('sub_heading', this.form.value.subheading);
  formData.append('attractions', this.form.value.attractions);
  formData.append('highlights', highlightsText);
  formData.append('image', this.form.value.image);

  this.tourService.createTour(formData).subscribe({
    next: (res: any) => {
      // ✅ SHOW SUCCESS MESSAGE
      this.successMessage = res.message || 'Tour created successfully!';
      this.errorMessage = '';

      // reset form
      this.form.reset();
      this.highlights.clear();
      this.addHighlight();

      // optional: auto close modal after 2 seconds
      setTimeout(() => {
        this.activeModal.dismiss('success');
      }, 2000);
    },
    error: (err) => {
      this.errorMessage = 'Something went wrong. Please try again.';
      this.successMessage = '';
      console.error(err);
    },
  });
}


    stripHtml(html: string): string {
        const temp = document.createElement('div');
        temp.innerHTML = html;
        return temp.textContent || temp.innerText || '';
    }

    close() {
        this.activeModal.dismiss();
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
            0: { items: 1 },
            516: { items: 1 },
            696: { items: 2 },
            936: { items: 3 },
            1116: { items: 4 },
        },
    };
}
