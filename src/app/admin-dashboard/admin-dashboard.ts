import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageBanner } from "../common/page-banner/page-banner";
import { Sidebar } from "./sidebar/sidebar";

@Component({
    selector: 'app-admin-dashboard',
    imports: [RouterOutlet, PageBanner, Sidebar],
    templateUrl: './admin-dashboard.html',
    styleUrl: './admin-dashboard.scss',
})
export class AdminDashboard {}