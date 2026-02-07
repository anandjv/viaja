import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Tour } from './tour';

@Component({
  selector: 'app-tour-image-uploade',
  imports: [CommonModule],
  templateUrl: './tour-image-uploade.html',
  styleUrl: './tour-image-uploade.scss',
})
export class TourImageUploade {
 selectedFiles: File[] = [];
  previews: string[] = [];
  loading = false;
  @Input() toursId!: number;

  constructor(
    public activeModal: NgbActiveModal,
    private imageService: Tour
  ) {}

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;

    this.selectedFiles = Array.from(input.files);
    this.previews = [];

    this.selectedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => this.previews.push(reader.result as string);
      reader.readAsDataURL(file);
    });
  }

upload() {
    if (!this.toursId || !this.selectedFiles.length) return;

    this.loading = true;

    this.imageService
      .syncImages(this.toursId, this.selectedFiles)
      .subscribe({
        next: () => {
          this.loading = false;
          this.activeModal.close('success');
        },
        error: err => {
          console.error('Upload failed', err);
          this.loading = false;
        },
      });
  }
}
