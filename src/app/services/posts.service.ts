import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  URL = 'http://localhost:8080/index.php?rest_route=/wp/v2/posts';
    constructor(private httpClient: HttpClient) {

     }

   getAllPost(category?:number){
    if (category) {
      const params : HttpParams = new HttpParams().set('categories', category);
      return this.httpClient.get(this.URL, {params});
    }
    return this.httpClient.get(this.URL);
   }
}
