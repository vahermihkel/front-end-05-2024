import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToodeService } from '../services/toode.service';
import { OstukorvService } from '../services/ostukorv.service';
import { Toode } from '../models/toode';
import { RouterLink } from '@angular/router';
import { ShortenerPipe } from '../pipes/shortener.pipe';
import { PricePipe } from '../pipes/price.pipe';
import { DatePipe, JsonPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-avaleht',
  standalone: true,
  imports: [
    RouterLink, 
    ShortenerPipe, 
    PricePipe,
    DatePipe,
    PercentPipe,
    JsonPipe
  ],
  templateUrl: './avaleht.component.html',
  styleUrl: './avaleht.component.css'
})
export class AvalehtComponent implements OnInit {
  tooted: Toode[] = [];
  kuupaev = new Date();

  constructor(private toastr: ToastrService,
    private toodeService: ToodeService,
    private ostukorvService: OstukorvService
  ) {}

  ngOnInit(): void {
    this.toodeService.saaTooted().subscribe(vastus => this.tooted = vastus); 
  }

  lisaOstukorvi(toode: Toode) {
    // this.ostukorvService.ostukorv.push(toode);
    this.ostukorvService.lisaOstukorvi(toode);
    this.toastr.success('Edukalt ostukorvi lisatud!', toode.nimi, {
      timeOut: 3000,
      closeButton: true,
      positionClass: "toast-bottom-right"
    });
  }

}