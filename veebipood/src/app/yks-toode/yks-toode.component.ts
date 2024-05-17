import { Component, OnInit } from '@angular/core';
import { Toode } from '../models/toode';
import { ToodeService } from '../services/toode.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-yks-toode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './yks-toode.component.html',
  styleUrl: './yks-toode.component.css'
})
export class YksToodeComponent implements OnInit {
  toode!: Toode;

  constructor(private toodeService: ToodeService,
    private route: ActivatedRoute // päriselt võiks olla 
    //    kõikides componentides samamoodi nimetatud
  ) {}

  ngOnInit(): void {
    const tooteNimi = this.route.snapshot.params["nimi"];
    if (tooteNimi === null) {
      return;
    }
    const leitudToode = this.toodeService.tooted.find(t => t.nimi === tooteNimi);
    if (leitudToode !== undefined) {
      this.toode = leitudToode;
    }
  }
}
