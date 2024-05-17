import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ToodeService } from '../services/toode.service';

@Component({
  selector: 'app-halda-tooteid',
  standalone: true,
  imports: [ // HTML
    CommonModule, // *ngIf
    FormsModule, // ngForm, [(ngModel)]
  ],
  templateUrl: './halda-tooteid.component.html',
  styleUrl: './halda-tooteid.component.css'
})
export class HaldaTooteidComponent {
  tooted = this.toodeService.tooted;

  showNimi = false;

  // TypeScript --> funktsioone või muutujaid välja kutsuda
  constructor(private toastr: ToastrService,
    private toodeService: ToodeService
  ) {}

  kustuta(index: number) {
    this.tooted.splice(index,1);
    this.toastr.error('Edukalt kustutatud!', "", {
      timeOut: 3000,
      closeButton: true,
      positionClass: "toast-bottom-right"
    });
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
    return tooteVorm.controls['nimi'].touched && 
        tooteVorm.value.nimi.includes('C') === false;
  }
}
