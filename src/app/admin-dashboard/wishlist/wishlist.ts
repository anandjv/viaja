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
import { Destination } from './destination';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-wishlist',
    imports: [CommonModule, CarouselModule, QuillModule, ReactiveFormsModule],
    templateUrl: './wishlist.html',
    styleUrl: './wishlist.scss',
})
export class Wishlist {
    form!: any;
    imageFile: File | null = null;
    editData: any = null;
    isEditMode = false;
    imageBaseUrl = 'https://www.inigotravels.com/bknd/uploads/';
    existingImageUrl: string | null = null;
    successMessage = '';
    errorMessage = '';

    constructor(
        public activeModal: NgbActiveModal,
        private fb: FormBuilder,
        private destinationService: Destination,
        private http: HttpClient,
    ) {}

    ngOnInit(): void {
        this.initForm();

        if (this.editData) {
            this.isEditMode = true;
            this.patchForm(this.editData);

            // ❌ Image NOT required in edit
            this.form.get('image')?.clearValidators();
            this.form.get('image')?.updateValueAndValidity();
        } else {
            // ✅ Image REQUIRED in create
            this.form.get('image')?.setValidators(Validators.required);
            this.form.get('image')?.updateValueAndValidity();
        }
    }

    patchForm(data: any) {
        this.form.patchValue({
            stateTitle: data.title,
            subheading: data.sub_heading,
            description: data.description,
            image: null, // important
        });

        this.existingImageUrl = data.image
            ? this.imageBaseUrl + data.image
            : null;

        this.highlights.clear();

        if (data.highlight) {
            data.highlight.split('\n').forEach((h: string) => {
                this.highlights.push(this.fb.control(h, Validators.required));
            });
        } else {
            this.addHighlight();
        }
    }

    updateDestination(id: number, payload: FormData): Observable<any> {
        return this.http.post(
            `https://www.inigotravels.com/bknd/api/destinations/${id}`,
            payload,
        );
    }

    update() {
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
        formData.append('description', this.form.value.description);
        formData.append('highlight', highlightsText);

        // ✅ ONLY when user uploads new image
        if (this.form.value.image) {
            formData.append('image', this.form.value.image); // binary
        }

        this.destinationService
            .updateDestination(this.editData.id, formData)
            .subscribe({
                next: () => {
                    this.successMessage = 'Updated successfully!';
                    setTimeout(() => {
                        this.activeModal.close('success');
                    }, 1500);
                },
                error: (err) => console.error(err),
            });
    }

    /* -----------------------
       FORM INIT
    ------------------------*/

    initForm() {
        this.form = this.fb.group({
            stateTitle: ['', [Validators.required, this.stateTitleValidator]],
            subheading: ['', Validators.required],
            description: ['', Validators.required],
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
        formData.append('description', this.form.value.description);
        formData.append('highlight', highlightsText);
        formData.append('image', this.form.value.image);

        this.destinationService.createDestination(formData).subscribe({
            next: (res: any) => {
                // ✅ SHOW SUCCESS MESSAGE
                this.successMessage = res.message || 'Created successfully!';
                this.errorMessage = '';

                // ✅ CLOSE AFTER 1.5 SECONDS
                setTimeout(() => {
                    this.activeModal.close('success');
                }, 1500);
            },
            error: () => {
                this.errorMessage = 'Something went wrong';
                this.successMessage = '';
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
