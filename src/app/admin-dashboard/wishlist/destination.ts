import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class Destination {
  private apiUrl = 'https://www.inigotravels.com/bknd/api/destinations';

  constructor(private http: HttpClient) {}

  // ✅ GET destinations
  getDestinations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // ✅ POST destination (already working)
  createDestination(payload: FormData): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }
  updateDestination(id: number, payload: FormData): Observable<any> {
    payload.append('_method', 'PUT'); // 🔥 IMPORTANT (Laravel support)
    return this.http.post(`${this.apiUrl}/${id}`, payload);
  }

  // ✅ DELETE destination
deleteDestination(id: number): Observable<any> {
  return this.http.delete(
    `https://inigotravels.com/bknd/api/destinations/${id}`
  );
}


}
