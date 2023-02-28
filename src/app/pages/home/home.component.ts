import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  postData: any[]=[];
  weData: any[]=[];
  slides: any[] = ['http://localhost:8080/wp-content/uploads/2023/02/Screenshot_6.png','http://localhost:8080/wp-content/uploads/2023/02/Screenshot_3.png'];

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.getLogo(3);
    this.getWeDAta(7);
  }

  getLogo(id:number){
    this.postService.getAllPost(id).subscribe({
      next: (resp:any) => {
        this.postData = resp;
      }
    })
  }

  getWeDAta(id:number){
    this.postService.getAllPost(id).subscribe({
      next: (resp:any) => {
        this.weData = resp;
      }
    })
  }
}
