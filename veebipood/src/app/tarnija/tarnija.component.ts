import { Component } from '@angular/core';
import { TarnijaService } from '../services/tarnija.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';
import { Product } from '../models/product';

@Component({
  selector: 'app-tarnija',
  standalone: true,
  imports: [CommonModule, FormsModule, LoaderComponent],
  templateUrl: './tarnija.component.html',
  styleUrl: './tarnija.component.css'
})
export class TarnijaComponent {
  tooted: Product[] = [];
  price = "";
  submitted = false;
  tootedOriginal: Product[] = [];
  isLoading = true;

  constructor(private tarnijaService: TarnijaService) {}

  ngOnInit() {
    this.tarnijaService.saaTooted().subscribe(vastus => {
      this.tooted = vastus;
      this.tootedOriginal = this.tooted;  
      this.isLoading = false;
    }); 
  }

  mostExpensive() {
    // const result = this.tooted.sort((a,b)=> b.price - a.price);
    // this.tooted = [result[0]];
    const result: Product[] = [this.tooted[0]];
    let mostExpensive = this.tooted[0];
    this.tooted.forEach(toode => {
      if (mostExpensive.price === toode.price) {
        result.push(toode);
      }
      if (mostExpensive.price < toode.price) {
        result.splice(0);
        result.push(toode);
        mostExpensive = toode;
      }
    });
    this.tooted = result;
  }

  cheapest() {
    // const result = this.tooted.sort((a,b)=> a.price - b.price);
    // this.tooted = [result[0]];
    const result: Product[] = [this.tooted[0]];
    let leastExpensive = this.tooted[0];
    this.tooted.forEach(toode => {
      if (leastExpensive.price === toode.price) {
        result.push(toode);
      }
      if (leastExpensive.price > toode.price) {
        result.splice(0);
        result.push(toode);
        leastExpensive = toode;
      }
    });
    this.tooted = result;
  }
  lowerPrice(){
    const result = this.tooted.filter(e => e.price <= Number(this.price));
    this.tooted = result;
    this.submitted = true;
  }
  higherPrice(){
    const result = this.tooted.filter(e => e.price >= Number(this.price));
    this.tooted = result;
    this.submitted = true;
  }
  restore(){
    this.submitted = false;
    this.tooted = this.tootedOriginal;
    this.price = "";
  }
}
