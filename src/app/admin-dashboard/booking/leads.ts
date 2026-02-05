import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Leads {
  private api = 'https://www.inigotravels.com/bknd/api/leads';

  constructor(private http: HttpClient) {}

  createLead(data: any): Observable<any> {
    return this.http.post(this.api, data);
  }
}
