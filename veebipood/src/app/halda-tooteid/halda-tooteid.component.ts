import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ToodeService } from '../services/toode.service';
import { RouterLink } from '@angular/router';
import { Toode } from '../models/toode';
import { KategooriaService } from '../services/kategooria.service';
import { Kategooria } from '../models/kategooria';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-halda-tooteid',
  standalone: true,
  imports: [ // HTML
    CommonModule, // *ngIf
    FormsModule, // ngForm, [(ngModel)]
    RouterLink, // routerLink
    TranslateModule
  ],
  templateUrl: './halda-tooteid.component.html',
  styleUrl: './halda-tooteid.component.css'
})
export class HaldaTooteidComponent implements OnInit {
  tooted: Toode[] = [];
  kategooriad: Kategooria[] = [];

  showNimi = false;

  // TypeScript --> funktsioone või muutujaid välja kutsuda
  constructor(private toastr: ToastrService,
    private toodeService: ToodeService,
    private kategooriaService: KategooriaService
  ) {}

  ngOnInit(): void {
    this.toodeService.saaTooted().subscribe(vastus => this.tooted = vastus); 
    this.kategooriaService.saaKategooriad().subscribe(vastus => this.kategooriad = vastus); 
  }

  kustuta(index: number) {
    this.tooted.splice(index,1);
    this.toastr.error('Edukalt kustutatud!', "", {
      timeOut: 3000,
      closeButton: true,
      positionClass: "toast-bottom-right"
    });
    this.toodeService.uuendaTooted(this.tooted).subscribe();
  }

  lisa(vorm: NgForm) {
    console.log(vorm); // <--- kogu vorm, koos andmetega, mis tal küljes on
    console.log(vorm.controls);
    console.log(vorm.controls['nimi']);

    console.log(vorm.value) // <--- objektina kõik ngModel ja name'd koos väärtustega
    console.log(vorm.value.nimi)
    console.log(vorm.value.hind)
    this.tooted.push(vorm.value); // <-- peab minema vormi seest lisatud väärtused
    vorm.reset();
    this.toodeService.uuendaTooted(this.tooted).subscribe();
    // ilus oleks, et toast tuleb siis kui subscribe sisu tehtud
    this.toastr.success('Edukalt lisatud!', "", {
      timeOut: 3000,
      closeButton: true,
      positionClass: "toast-bottom-right"
    });
  }

  changeShowNimi() {
    this.showNimi = !this.showNimi;
  }

  isNimiInvalid(tooteVorm: NgForm): boolean {
    if (tooteVorm.controls['nimi'] === undefined) {
      return true;
    }
    return tooteVorm.controls['nimi'].touched && 
        tooteVorm.value.nimi.includes('C') === false;
  }
}
