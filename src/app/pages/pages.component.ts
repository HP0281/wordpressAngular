import { Component, OnInit } from '@angular/core';
import { PagesService } from '../services/pages.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  pageData: any = {};
  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
    this.getPage(28);
  }

  getPage(id:number){
    this.pagesService.getAllPages(id).subscribe({
      next: (resp:any) => {
        this.pageData = resp;
        console.log(this.pageData);

      }
    })
  }
}
