import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kategooria } from '../models/kategooria';

@Injectable({
  providedIn: 'root'
})
export class KategooriaService {
  private url = "https://mihkel-veebipood-mai-default-rtdb.europe-west1.firebasedatabase.app/categories.json";

  constructor(private http: HttpClient) { }

  saaKategooriad(): Observable<Kategooria[]> {
    return this.http.get<Kategooria[]>(this.url);
  }

  uuendaKategooria(kategooriad: Kategooria[]): Observable<Kategooria[]> {
    return this.http.put<Kategooria[]>(this.url, kategooriad);
  }
}
