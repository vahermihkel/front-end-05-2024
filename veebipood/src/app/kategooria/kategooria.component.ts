import { Component } from '@angular/core';
import { Kategooria } from '../models/kategooria';
import { KategooriaService } from '../services/kategooria.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-kategooria',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './kategooria.component.html',
  styleUrl: './kategooria.component.css'
})
export class KategooriaComponent {
  kategooriad: Kategooria[] = [];

  constructor(private kategooriaService: KategooriaService) {}

  ngOnInit(): void {
    this.kategooriaService.saaKategooriad().subscribe(vastus => this.kategooriad = vastus || []);
  }

  lisa(vorm: NgForm) {
    this.kategooriad.push(vorm.value);
    this.kategooriaService.uuendaKategooria(this.kategooriad).subscribe();
    vorm.reset();
  }

  kustuta(index: number) {
    this.kategooriad.splice(index, 1);
    this.kategooriaService.uuendaKategooria(this.kategooriad).subscribe();
  }
}
