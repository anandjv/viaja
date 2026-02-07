import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../pages/my-account-page/auth-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './sidebar.html',
    styleUrl: './sidebar.scss',
})
export class Sidebar {
    constructor(
    private authService: AuthService,
    private router: Router
  ) {}

 logout() {
    this.authService.logout();
    this.router.navigate(['/my-account']);
  }
}
