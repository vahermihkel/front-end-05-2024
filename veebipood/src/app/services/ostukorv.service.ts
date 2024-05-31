import { Injectable } from '@angular/core';
import { Toode } from '../models/toode';
import { OstukorviToode } from '../models/ostukorvi-toode';

@Injectable({
  providedIn: 'root'
})
export class OstukorvService {
  // ostukorv: Toode[] = [];

  constructor() { }

  saaOstukorv(): OstukorviToode[] {
    return JSON.parse(localStorage.getItem("ostukorv") || "[]");
  }

  lisaOstukorvi(lisatavToode: Toode): void {
    const ostukorvLS: OstukorviToode[] = JSON.parse(localStorage.getItem("ostukorv") || "[]");
    const index = ostukorvLS.findIndex(t => t.toode.nimi === lisatavToode.nimi);
    if (index >= 0) { // kui index on -1, siis ei ole olemas
      ostukorvLS[index].kogus++;
    } else {
      ostukorvLS.push({kogus: 1, toode: lisatavToode});
    }
    localStorage.setItem("ostukorv", JSON.stringify(ostukorvLS));
  }

  uuendaOstukorv(tooted: OstukorviToode[]): void {
    localStorage.setItem("ostukorv", JSON.stringify(tooted));
  }
}

// kollane - funktsioon
// oranž - string väärtus
// helesinine - sissekirjutatud muutujad, let muutujad või võtmed
// tavaline sinine - const muutujad
// tumesinine - määratlus 
// lilla - käsklus if/export/import/return
// ((((((((((({{{[[[{{[]}}]]]}}})))))))))))
// roheline - tüüp
