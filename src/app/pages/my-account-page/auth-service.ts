import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://www.inigotravels.com/bknd/api/admin/login';

  constructor(private http: HttpClient) {}

// login(data: { username: string; password: string }) {
//   return this.http.post<any>(this.apiUrl, data).pipe(
//     tap(res => {
//       if (res?.token) {
//         sessionStorage.setItem('admin_token', res.token);
//       }
//     })
//   );
// }

login(data: { username: string; password: string }) {
  return this.http.post<any>(this.apiUrl, data).pipe(
    tap(res => {
      if (res?.token) {
        localStorage.setItem('admin_token', res.token);
      }
    })
  );
}


  isLoggedIn(): boolean {
    return !!localStorage.getItem('admin_token');
  }

  logout() {
    localStorage.removeItem('admin_token');
  }

   isAdmin(): boolean {
    return this.isLoggedIn();
  }
  
}
