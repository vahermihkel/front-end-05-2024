import { Component, OnInit } from '@angular/core';
import { Toode } from '../models/toode';
import { ToodeService } from '../services/toode.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-muuda-toode',
  standalone: true,
  imports: [
    // No provider for NgControl found in NodeInjector
    FormsModule,
    ReactiveFormsModule,
    // Can't bind to 'ngIf' since it isn't a known property of
    CommonModule
  ],
  templateUrl: './muuda-toode.component.html',
  styleUrl: './muuda-toode.component.css'
})
export class MuudaToodeComponent implements OnInit {
  toode!: Toode;
  //editProductForm
  muudaToodeVorm!: FormGroup;
  index!: number;
  private tooted: Toode[] = [];

  constructor(private toodeService: ToodeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {                   //.paramMap.get("nimi");
    const tooteNimi = this.route.snapshot.params["nimi"];
    if (tooteNimi === null) {
      return;
    }
    this.toodeService.saaTooted().subscribe(vastus => {
      this.tooted = vastus;
      const leitudToode = vastus.find(t => t.nimi === tooteNimi);
      if (leitudToode !== undefined) {
        this.toode = leitudToode;
        this.index = vastus.indexOf(leitudToode);
        this.muudaToodeVorm = new FormGroup({
          "nimi": new FormControl(leitudToode.nimi, [Validators.minLength(4)]),
          "hind": new FormControl(leitudToode.hind),
          "aktiivne": new FormControl(leitudToode.aktiivne),
          "pilt": new FormControl(leitudToode.pilt)
        });
      }
    }); 
    
  }

  muuda() {
    this.tooted[this.index] = this.muudaToodeVorm.value;
    this.toodeService.uuendaTooted(this.tooted).subscribe(() => this.router.navigateByUrl("/halda"));
    // this.toodeService.tooted[this.index] = this.muudaToodeVorm.value;
  }

}
