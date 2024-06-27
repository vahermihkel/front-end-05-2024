import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OstukorvService } from './ostukorv.service';

@Injectable({
  providedIn: 'root'
})
export class TotalSumService {
  // totalSum = 95;
  totalSum = new BehaviorSubject(this.kokku()); // läheb käima 1 korra ja siis kui ta käivitatakse
  //       = new Subject() --> läheb käima ainult siis kui ta käivitatakse

  constructor(
    private ostukorvService: OstukorvService
  ) { }

  kokku(): number {
    let sum = 0;
    this.ostukorvService.saaOstukorv().forEach(t => sum += t.kogus * t.toode.hind);
    return sum;
  }
}
