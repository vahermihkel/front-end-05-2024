import { Injectable } from '@angular/core';
import { Toode } from '../models/toode';

@Injectable({
  providedIn: 'root'
})
export class OstukorvService {
  ostukorv: Toode[] = [];

  constructor() { }
}
