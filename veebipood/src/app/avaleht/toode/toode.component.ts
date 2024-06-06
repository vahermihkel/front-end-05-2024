import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShortenerPipe } from '../../pipes/shortener.pipe';
import { PricePipe } from '../../pipes/price.pipe';
import { RouterLink } from '@angular/router';
import { Toode } from '../../models/toode';

@Component({
  selector: 'app-toode',
  standalone: true,
  imports: [
    ShortenerPipe, 
    PricePipe,
    RouterLink
  ],
  templateUrl: './toode.component.html',
  styleUrl: './toode.component.css'
})
export class ToodeComponent {
  @Input("toode") toode!: Toode;
  @Output() addToCart: EventEmitter<Toode> = new EventEmitter();
  // outputile tuleb emittida

  // ostukorvi(toode: Toode) {
  //   this.addToCart.emit(toode);
  // }
}
