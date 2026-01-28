import { Component } from '@angular/core';
import { PageBanner } from "../../common/page-banner/page-banner";
import { WidgetSidebar } from "../../common/widget-sidebar/widget-sidebar";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog-details-page',
    imports: [RouterLink, PageBanner, WidgetSidebar],
    templateUrl: './blog-details-page.html',
    styleUrl: './blog-details-page.scss',
})
export class BlogDetailsPage {}