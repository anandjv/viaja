import { Component, ElementRef, ViewChild } from '@angular/core';
import { DateRangePicker } from '../../../common/search/date-range-picker/date-range-picker';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-banner',
    imports: [RouterLink],
    templateUrl: './banner.html',
    styleUrl: './banner.scss',
})
export class Banner {
    videoPath = '../../../../assets/Video/1.mp4';
    @ViewChild('videoPlayer') video!: ElementRef<HTMLVideoElement>;
    ngAfterViewInit(): void {
        this.video.nativeElement.muted = true; // required for autoplay
        this.video.nativeElement.play().catch((err) => {
            console.log('Autoplay blocked:', err);
        });
    }

    onLoaded() {
        console.log('Video ready & autoplaying');
    }
}
