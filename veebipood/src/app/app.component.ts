import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component';
import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive, 
    CommonModule,
    MapComponent,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'veebipood';
  keel = localStorage.getItem("keel") || "est";
  darkMode = localStorage.getItem("isDarkMode") === "true";
  
  constructor(private translate: TranslateService) {
    // translate.setDefaultLang('en');
    // translate.use('en');
  }

  ngOnInit(): void {
    this.checkIfDarkTheme()
  }

  muudaKeel(uusKeel: string) {
    this.keel = uusKeel;
    localStorage.setItem("keel", this.keel);
    this.translate.use(uusKeel);
  }

  muudaMode() {
    console.log(this.darkMode);
    this.darkMode = !this.darkMode;
    console.log(this.darkMode);
    localStorage.setItem("isDarkMode", this.darkMode.toString());
    this.checkIfDarkTheme();
  }

  checkIfDarkTheme() {
    if (this.darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
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

// T 21.mai
// 7. N 23.mai
// 8. T 28.mai
// 9. R 31.mai
// 10. T 04.06
// 11. N 06.06
// 12. K 12.06
// 13. R 14.06
// 14. T 18.06
// 15. R 21.06 --> N 20.06
// 16a. eelviimane R 28.06 -> arutleme projekti üle, saame koos midagi teha
// 16b. viimane. R 05.07??? -> esitlus
// Lõpuprojekt --> mis koondab oskusi, mida me õppinud oleme
// 2 nädalat aega

