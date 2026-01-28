import { Component } from '@angular/core';
import { PageBanner } from "../../common/page-banner/page-banner";
import { WidgetSidebar } from "../../common/widget-sidebar/widget-sidebar";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog-right-sidebar-page',
    imports: [RouterLink, PageBanner, WidgetSidebar],
    templateUrl: './blog-right-sidebar-page.html',
    styleUrl: './blog-right-sidebar-page.scss',
})
export class BlogRightSidebarPage {}