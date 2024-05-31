import { Component, OnInit } from '@angular/core';
import { Toode } from '../models/toode';
import { ToodeService } from '../services/toode.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-yks-toode',
  standalone: true,
  imports: [CommonModule, LoaderComponent],
  templateUrl: './yks-toode.component.html',
  styleUrl: './yks-toode.component.css'
})
export class YksToodeComponent implements OnInit {
  toode!: Toode;
  isLoading = true;

  constructor(private toodeService: ToodeService,
    private route: ActivatedRoute // päriselt võiks olla 
    //    kõikides componentides samamoodi nimetatud
  ) {}

  ngOnInit(): void {
    const tooteNimi = this.route.snapshot.params["nimi"];
    if (tooteNimi === null) {
      return;
    }
    this.toodeService.saaTooted().subscribe(vastus => {
      const leitudToode = vastus.find(t => t.nimi === tooteNimi);
      if (leitudToode !== undefined) {
        this.toode = leitudToode;
      }
      this.isLoading = false;
    }); 


    
  }
}
