import { Component } from '@angular/core';
import { PageBanner } from "../../common/page-banner/page-banner";
import { WidgetSidebar } from "../../common/widget-sidebar/widget-sidebar";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog-left-sidebar-page',
    imports: [RouterLink, PageBanner, WidgetSidebar],
    templateUrl: './blog-left-sidebar-page.html',
    styleUrl: './blog-left-sidebar-page.scss',
})
export class BlogLeftSidebarPage {}