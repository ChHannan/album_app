import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Photo} from 'src/app/models/photo';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  photoUrl = `${environment.apiUrl}photos`;

  constructor(private httpClient: HttpClient) { }

  fetchPhotos(albumID: number): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(`${this.photoUrl}?albumId=${albumID}`);
  }

  createPhoto(photo: Photo): Observable<any> {
    return this.httpClient.post(this.photoUrl, photo);
  }

  updatePhoto(photoID: number, photo: Photo): Observable<any> {
    return this.httpClient.patch(`${this.photoUrl}/${photoID}`, photo);
  }

  deletePhoto(photoID: number): Observable<any> {
    return this.httpClient.delete(`${this.photoUrl}/${photoID}`);
  }
}
