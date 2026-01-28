import { Component } from '@angular/core';
import { DateRangePicker } from "../../../common/search/date-range-picker/date-range-picker";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-banner',
    imports: [DateRangePicker, RouterLink],
    templateUrl: './banner.html',
    styleUrl: './banner.scss',
})
export class Banner {}