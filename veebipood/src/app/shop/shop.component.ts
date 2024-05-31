import { Component } from '@angular/core';
import { Shop } from '../models/shop';
import { ShopsService } from '../services/shops.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  poed: Shop[] = [];

  constructor( private shopsService: ShopsService){}

  ngOnInit(): void {
    this.shopsService.shopsRequest().subscribe(vastus => this.poed = vastus || []);
  }
  lisa(vorm: NgForm){
    this.poed.push(vorm.value);
    this.shopsService.shopsRefresh(this.poed).subscribe();
    vorm.reset();
  }
  kustuta(index:number){
    this.poed.splice(index,1);
    this.shopsService.shopsRefresh(this.poed).subscribe();
  }
}
