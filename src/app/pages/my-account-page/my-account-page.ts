import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { PageBanner } from "../../common/page-banner/page-banner";
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth-service';

@Component({
    selector: 'app-my-account-page',
    imports: [CommonModule, PageBanner, NgClass, FormsModule],
    templateUrl: './my-account-page.html',
    styleUrl: './my-account-page.scss',
})
export class MyAccountPage {

    currentTab = 'tab1';

  loginData = {
    username: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  switchTab(event: MouseEvent, tab: string) {
    event.preventDefault();
    this.currentTab = tab;
  }

onLogin() {
  this.authService.login(this.loginData).subscribe({
    next: (res) => {
      if (res?.token) {
        this.router.navigate(['/admin-dashboard']);
      } else {
        alert('Login failed');
      }
    },
    error: () => {
      alert('Invalid username or password');
    }
  });
}

  /** ✅ check login */
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  /** ✅ logout */
  logout() {
    this.authService.logout();
    this.router.navigate(['/my-account']); // or /login
  }

}