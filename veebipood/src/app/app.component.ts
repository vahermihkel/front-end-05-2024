import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
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

// Globaalne muutuja, mida saab reaalajas muuta

// T 21.mai
// N 23.mai
// T 28.mai
// R 31.mai

