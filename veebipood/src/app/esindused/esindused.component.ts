import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EsindusService } from '../services/esindus.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-esindused',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './esindused.component.html',
  styleUrl: './esindused.component.css'
})
export class EsindusedComponent {
  aktiivneLinn = "tallinn";
  esindused: { [key: string]: string[] } = this.esindusService.esindused;

  constructor(private esindusService: EsindusService) {}

  muudaLinn(uusLinn: string) {
    this.aktiivneLinn = uusLinn;
  }

  sorteeriAZ() {
    this.esindused[this.aktiivneLinn].sort((a,b) => a.localeCompare(b));
  }

  sorteeriZA() {
    this.esindused[this.aktiivneLinn].sort((a,b) => b.localeCompare(a));
  }

  sorteeriTahedKasv() {
    this.esindused[this.aktiivneLinn].sort((a,b) => a.length - b.length);
  }

  sorteeriTahedKah() {
    this.esindused[this.aktiivneLinn].sort((a,b) => b.length - a.length);
  }

  sorteeriKolmasTahtAZ() {
    this.esindused[this.aktiivneLinn].sort((a,b) => a[2].localeCompare(b[2]));
  }

  sorteeriSonadeArv() {
    this.esindused[this.aktiivneLinn].sort((a,b) => a.split(" ").length - b.split(" ").length);
  }

  filtreeriEndsWithE() {
    const result = this.esindused[this.aktiivneLinn].filter(e => e.endsWith("e"));
    this.esindused[this.aktiivneLinn] = result;
  }

  filtreeriKellelOn9Tahte() {
    const result = this.esindused[this.aktiivneLinn].filter(e => e.length === 9);
    this.esindused[this.aktiivneLinn] = result;
  }

  filtreeriKellelOnVah7Tahte() {
    const result = this.esindused[this.aktiivneLinn].filter(e => e.length >= 7);
    this.esindused[this.aktiivneLinn] = result;
  }

  filtreeriKesSisaldabIsLyhendit() {
    const result = this.esindused[this.aktiivneLinn].filter(e => e.includes("is"));
    this.esindused[this.aktiivneLinn] = result;
  }

  filtreeriKellelOnKolmasTahtI() {
    const result = this.esindused[this.aktiivneLinn].filter(e => e[2] === "i");
    this.esindused[this.aktiivneLinn] = result;
  }

  tahedKokku() {
    let summa = 0;
    // summa = summa + 9
    // summa = summa + 5
    this.esindused[this.aktiivneLinn].forEach(e => summa = summa + e.length);
    return summa;
  }

}
