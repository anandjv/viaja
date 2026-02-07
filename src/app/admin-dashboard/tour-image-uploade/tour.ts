import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Tour {
    private api = 'https://inigotravels.com/bknd/api/tours/sync-images';

  constructor(private http: HttpClient) {}

  // ✅ DESTINATION ID SENT TO BACKEND
 syncImages(destinationId: number, files: File[]) {
    const formData = new FormData();

    formData.append('destination_id', destinationId.toString());

    files.forEach(file => {
      formData.append('images[]', file);
    });

    return this.http.post(this.api, formData);
  }
}
