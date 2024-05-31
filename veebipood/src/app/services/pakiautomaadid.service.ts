import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pakiautomaat } from '../models/pakiautomaat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // vajadusel muuta taset
})
export class PakiautomaadidService {

            // Dependency Injection
  // võtab kasutusele HttpClient sisu hetkel kui see class luuakse
  constructor(private http: HttpClient) { }

  saaPakiautomaadid(): Observable<Pakiautomaat[]> {
    return this.http.get<Pakiautomaat[]>("https://www.omniva.ee/locations.json");
  }
}
