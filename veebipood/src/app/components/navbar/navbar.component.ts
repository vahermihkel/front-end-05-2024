import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { TotalSumService } from '../../services/total-sum.service';
import { PricePipe } from '../../pipes/price.pipe';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-menyy',
  standalone: true,
  imports: [
    RouterLink, 
    RouterLinkActive, 
    CommonModule,
    TranslateModule,
    PricePipe
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  keel = localStorage.getItem("keel") || "est";
  darkMode = localStorage.getItem("isDarkMode") === "true";
  totalSum = 0;
  loggedIn = false;
  
  constructor(
    private totalSumService: TotalSumService,
    private translate: TranslateService,
    private authService: AuthService,
    private router: Router
  ) {
    // translate.setDefaultLang('en');
    // translate.use('en');
  }

  ngOnInit(): void {
    this.checkIfDarkTheme();

    // rxjs, et teeks korduvalt seda rida
    // rxjs --> teises componendis pane mingi koodirida uuesti käima
    // this.totalSum = this.totalSumService.totalSum;
    this.totalSumService.totalSum.subscribe(sum => {
      this.totalSum = sum;
    });

    this.authService.loggedIn.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    })
    // this.totalSumService.totalSum.next("105"); kui on Subject(), aga meil pole vaja, sest
    //        BehaviorSubject juba käivitub koheselt 1 korra
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

  logout() {
    this.authService.loggedIn.next(false);
    sessionStorage.removeItem("token");
    this.router.navigateByUrl("/");
  }

  // ngOnDestroy(): void {
  //   this.totalSumService.totalSum.unsubscribe();
  // }
}
