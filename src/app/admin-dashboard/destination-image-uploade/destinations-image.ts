import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DestinationsImage {

  private api = '/api/destinations/sync-images';

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
