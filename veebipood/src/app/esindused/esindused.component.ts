import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EsindusService } from '../services/esindus.service';
import { TranslateModule } from '@ngx-translate/core';
import { SorteeriNupudComponent } from './sorteeri-nupud/sorteeri-nupud.component';
import { FiltreeriNupudComponent } from './filtreeri-nupud/filtreeri-nupud.component';

@Component({
  selector: 'app-esindused',
  standalone: true,
  imports: [
    RouterLink, 
    TranslateModule, 
    SorteeriNupudComponent, 
    FiltreeriNupudComponent
  ],
  templateUrl: './esindused.component.html',
  styleUrl: './esindused.component.css'
})
export class EsindusedComponent {
  aktiivneLinn = "tallinn";
  esindused: { [key: string]: string[] } = this.esindusService.esindused;

  constructor(private esindusService: EsindusService) {}

  muudaLinn(uusLinn: string) {
    this.aktiivneLinn = uusLinn;
  }

  tahedKokku() {
    let summa = 0;
    // summa = summa + 9
    // summa = summa + 5
    this.esindused[this.aktiivneLinn].forEach(e => summa = summa + e.length);
    return summa;
  }

}
