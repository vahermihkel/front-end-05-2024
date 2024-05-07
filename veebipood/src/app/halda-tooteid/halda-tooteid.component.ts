import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-halda-tooteid',
  standalone: true,
  imports: [FormsModule], // RouterLink, FormsModule
  templateUrl: './halda-tooteid.component.html',
  styleUrl: './halda-tooteid.component.css'
})
export class HaldaTooteidComponent {
  tooted = [
    {nimi: "Coca", hind: 3, aktiivne: true, pilt: "https://www.cokesolutions.com/content/cokesolutions/site/us/en/products/brands/coca-cola/coca-cola.main-image.290-417.png"}, 
    {nimi: "Fanta", hind: 2, aktiivne: false, pilt: "https://www.bigbasket.com/media/uploads/p/xxl/251041_9-fanta-soft-drink-orange-flavoured.jpg"}, 
    {nimi: "Sprite", hind: 2.5, aktiivne: true, pilt: "https://www.coca-cola.com/content/dam/onexp/gb/en/product/sprite-low-cal-02.png"}
  ]

  kustuta(index: number) {
    this.tooted.splice(index,1);
  }

  lisa(vorm: NgForm) {
    console.log(vorm); // <--- kogu vorm, koos andmetega, mis tal küljes on
    console.log(vorm.value) // <--- objektina kõik ngModel ja name'd koos väärtustega
    console.log(vorm.value.nimi)
    console.log(vorm.value.hind)
    this.tooted.push(vorm.value); // <-- peab minema vormi seest lisatud väärtused
  }
}
