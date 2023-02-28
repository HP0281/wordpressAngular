import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  URL = 'http://localhost:8080/index.php?rest_route=/wp/v2/pages';
  constructor(private httpClient: HttpClient) {

   }

 getAllPages(id?:number){
  if (id) {;
    return this.httpClient.get(`${this.URL}/${id}`);
  }
  return this.httpClient.get(this.URL);
 }
}
