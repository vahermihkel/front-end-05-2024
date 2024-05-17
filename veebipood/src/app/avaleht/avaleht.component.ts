import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToodeService } from '../services/toode.service';
import { OstukorvService } from '../services/ostukorv.service';
import { Toode } from '../models/toode';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-avaleht',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './avaleht.component.html',
  styleUrl: './avaleht.component.css'
})
export class AvalehtComponent {
  tooted = this.toodeService.tooted;

  constructor(private toastr: ToastrService,
    private toodeService: ToodeService,
    private ostukorvService: OstukorvService
  ) {}

  lisaOstukorvi(toode: Toode) {
    this.ostukorvService.ostukorv.push(toode);
    this.toastr.success('Edukalt ostukorvi lisatud!', toode.nimi, {
      timeOut: 3000,
      closeButton: true,
      positionClass: "toast-bottom-right"
    });
  }

}