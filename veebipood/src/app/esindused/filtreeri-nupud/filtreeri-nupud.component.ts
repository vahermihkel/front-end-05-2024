import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filtreeri-nupud',
  standalone: true,
  imports: [],
  templateUrl: './filtreeri-nupud.component.html',
  styleUrl: './filtreeri-nupud.component.css'
})
export class FiltreeriNupudComponent {
  @Input("poed") esindused!: { [key: string]: string[] };
  @Input() aktiivneLinn!: string;

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
}
