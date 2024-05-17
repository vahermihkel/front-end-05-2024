import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EsindusService {
  esindused: { [key: string]: string[] } = {
    "tallinn": ["Ülemiste","Rocca","Magistrali","Vesse","Kristiine","Järveotsa"],
    "tartu": ["Raatuse", "Lõunakeskus"],
    "narva": ["Fama"],
    "parnu": ["Port Artur 2"]
  };

  constructor() { }
}
