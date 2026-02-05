import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DestinationsImage } from './destinations-image';

@Component({
  selector: 'app-destination-image-uploade',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destination-image-uploade.html',
  styleUrl: './destination-image-uploade.scss',
})
export class DestinationImageUploade {
  selectedFiles: File[] = [];
  previews: string[] = [];
  loading = false;
  @Input() destinationId!: number;

  constructor(
    public activeModal: NgbActiveModal,
    private imageService: DestinationsImage
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
    if (!this.destinationId || !this.selectedFiles.length) return;

    this.loading = true;

    this.imageService
      .syncImages(this.destinationId, this.selectedFiles)
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
