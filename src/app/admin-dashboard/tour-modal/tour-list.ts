import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TourList {
    private apiUrl = 'https://www.inigotravels.com/bknd/api/tours';

  constructor(private http: HttpClient) {}

  // ✅ GET destinations
  getTour(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // ✅ POST destination (already working)
  createTour(payload: FormData): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }
    updateDestination(id: number, payload: FormData): Observable<any> {
    payload.append('_method', 'PUT'); // 🔥 IMPORTANT (Laravel support)
    return this.http.post(`${this.apiUrl}/${id}`, payload);
  }

 deleteTour(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
