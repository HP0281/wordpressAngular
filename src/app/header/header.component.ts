import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  postLogo:any ={};
  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.getLogo(6);
  }

  getLogo(id:number){
    this.postService.getAllPost(6).subscribe({
      next: resp => {
        this.postLogo = resp;
      }
    })
  }
}
