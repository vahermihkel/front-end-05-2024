import { Component } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  standalone: true,
  imports: [],
  templateUrl: './ostukorv.component.html',
  styleUrl: './ostukorv.component.css'
})
export class OstukorvComponent {
  tooted = [
    {nimi: "Coca", hind: 3}, 
    {nimi: "Fanta", hind: 2}, 
    {nimi: "Sprite", hind: 2.5}
  ]

  tyhjenda() {
    this.tooted = [];
  }

  kustuta(index: number) {
    this.tooted.splice(index, 1); 
  }

  lisa(toode: {nimi: string, hind: number}) {
    this.tooted.push(toode);
  }

  kokku() {
    let sum = 0;
    this.tooted.forEach(t => sum += t.hind);
    return sum;
  }
}
