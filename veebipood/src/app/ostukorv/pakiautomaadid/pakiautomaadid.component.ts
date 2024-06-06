import { Component } from '@angular/core';
import { PakiautomaadidService } from '../../services/pakiautomaadid.service';
import { Pakiautomaat } from '../../models/pakiautomaat';

@Component({
  selector: 'app-pakiautomaadid',
  standalone: true,
  imports: [],
  templateUrl: './pakiautomaadid.component.html',
  styleUrl: './pakiautomaadid.component.css'
})
export class PakiautomaadidComponent {
  pakiautomaadid: Pakiautomaat[] = [];

  constructor(private pakiautomaadidService: PakiautomaadidService){}

  ngOnInit() {
    this.pakiautomaadidService.saaPakiautomaadid()
      .subscribe(vastus => this.pakiautomaadid = vastus.filter(e => e.A0_NAME === "EE"))
  }
}
