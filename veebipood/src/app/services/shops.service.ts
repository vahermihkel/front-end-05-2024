import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shop } from '../models/shop';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {
  private url = "https://mihkel-veebipood-mai-default-rtdb.europe-west1.firebasedatabase.app/shops.json";
  constructor( private http: HttpClient) { }

  shopsRequest(): Observable<Shop[]> {
    return this.http.get<Shop[]>(this.url);
  }
  shopsRefresh(tooted: Shop[]): Observable<Shop[]> {
    return this.http.put<Shop[]>(this.url, tooted);
  }
}
