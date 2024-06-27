import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToodeService } from '../services/toode.service';
import { OstukorvService } from '../services/ostukorv.service';
import { Toode } from '../models/toode';
import { DatePipe, JsonPipe, PercentPipe } from '@angular/common';
import { ToodeComponent } from './toode/toode.component';
import { CardComponent } from '../components/card/card.component';
import { TotalSumService } from '../services/total-sum.service';

@Component({
  selector: 'app-avaleht',
  standalone: true,
  imports: [
    DatePipe,
    PercentPipe,
    JsonPipe,
    ToodeComponent,
    CardComponent
  ],
  templateUrl: './avaleht.component.html',
  styleUrl: './avaleht.component.css'
})
export class AvalehtComponent implements OnInit {
  tooted: Toode[] = [];
  kuupaev = new Date();

  constructor(private toastr: ToastrService,
    private toodeService: ToodeService,
    private ostukorvService: OstukorvService,
    private totalSumService: TotalSumService
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
    const newSum = this.totalSumService.totalSum.value + toode.hind;
    this.totalSumService.totalSum.next(newSum);
  }

}