import { Component } from '@angular/core';
import { AutodService } from './autod.service';
import { Auto } from './auto';
import { CommonModule, SlicePipe } from '@angular/common';
import { PageCenterPipe } from './page-center.pipe';
import { LoaderComponent } from '../../loader/loader.component';

@Component({
  selector: 'app-autod',
  standalone: true,
  imports: [
    SlicePipe,
    PageCenterPipe,
    CommonModule,
    LoaderComponent
  ],
  templateUrl: './autod.component.html',
  styleUrl: './autod.component.css'
})
export class AutodComponent {
  autod: Auto[] = [];
  pages: number[] = [];
  activePage = 1;
  pageSize = 5;
  isLoading = true;

  constructor(private autodService: AutodService) {}

  ngOnInit(): void {
    this.autodService.saaAutod().subscribe(vastus => {
      this.autod = vastus.results;
      const pagesCount = Math.ceil(vastus.results.length/this.pageSize);
      for (let index = 1; index <= pagesCount; index++) {
        this.pages.push(index);
      }
      this.isLoading = false;
    })
  }

  changePage(page: number) {
    this.activePage = page;
  }
}
