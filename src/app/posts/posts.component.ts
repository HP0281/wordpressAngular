import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, AfterViewInit {
  @ViewChild('content') content! : ElementRef;
  postsData: any[] =[];

  constructor(private postService: PostsService) { }
  ngAfterViewInit(): void {
    // this.content.nativeElement.innerHtml = this.postsData.content.rendered;
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.postService.getAllPost().subscribe({
      next: (resp:any) => {
        this.postsData = resp;

        console.log(this.postsData);

      }
    })
  }
}
