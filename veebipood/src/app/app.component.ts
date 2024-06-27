import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'veebipood'; 
}

// loader
// andmetüüp --> kaotame ära "any"
// URL parameetrid
// Reactive Forms
// LocalStorage

// Firebase -> Andmebaas

// Alamkomponendid

// Globaalne muutuja, mida saab reaalajas muuta -> rxjs

// Autentimine -> Firebase
// URLi kaitse -> Guard

// Alammenüü / Footer

// K 26.06 täispikk päev
// T 02.07 täispikk päev
// R 05.07 poolik päev
// T 09.07 poolik päev

