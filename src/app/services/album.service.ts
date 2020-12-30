import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Album} from 'src/app/models/album';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albumUrl = `${environment.apiUrl}albums/`;

  constructor(private httpClient: HttpClient) { }

  fetchAlbumsList(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(this.albumUrl);
  }

  fetchAlbum(albumID: number): Observable<Album> {
    return this.httpClient.get<Album>(this.albumUrl + albumID);
  }
}
