import { Component } from '@angular/core';
import { OstukorvService } from '../services/ostukorv.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PakiautomaadidService } from '../services/pakiautomaadid.service';
import { Toode } from '../models/toode';
import { Pakiautomaat } from '../models/pakiautomaat';

@Component({
  selector: 'app-ostukorv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ostukorv.component.html',
  styleUrl: './ostukorv.component.css'
})
export class OstukorvComponent {
  tooted = this.ostukorvService.ostukorv;
  pakiautomaadid: Pakiautomaat[] = [];

  constructor(private ostukorvService: OstukorvService,
    private pakiautomaadidService: PakiautomaadidService
  ){}

  ngOnInit() {
    this.pakiautomaadidService.saaPakiautomaadid()
      .subscribe(vastus => this.pakiautomaadid = vastus.filter(e => e.A0_NAME === "EE"))
  }

  tyhjenda() {
    this.tooted = [];
  }

  kustuta(index: number) {
    this.tooted.splice(index, 1); 
  }

  lisa(toode: Toode) {
    this.tooted.push(toode);
  }

  kokku() {
    let sum = 0;
    this.tooted.forEach(t => sum += t.hind);
    return sum;
  }
}
