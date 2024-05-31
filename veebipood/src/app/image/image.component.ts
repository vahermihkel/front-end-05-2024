import { Component } from '@angular/core';
import { Image } from '../models/image';
import { ImageService } from '../services/image.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {
  pildid: Image[] = [];

  constructor( private imageService: ImageService){}

  ngOnInit(): void {
    this.imageService.imagesRequest().subscribe(vastus => this.pildid = vastus || []);
  }
  lisa(vorm: NgForm){
    this.pildid.push(vorm.value);
    this.imageService.imagesRefresh(this.pildid).subscribe();
    vorm.reset();
  }
  kustuta(index:number){
    this.pildid.splice(index,1);
    this.imageService.imagesRefresh(this.pildid).subscribe();
  }
}
