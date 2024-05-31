import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private url = "https://mihkel-veebipood-mai-default-rtdb.europe-west1.firebasedatabase.app/images.json";
  constructor( private http: HttpClient) { }

  imagesRequest(): Observable<Image[]> {
    return this.http.get<Image[]>(this.url);
  }
  imagesRefresh(tooted: Image[]): Observable<Image[]> {
    return this.http.put<Image[]>(this.url, tooted);
  }
}
