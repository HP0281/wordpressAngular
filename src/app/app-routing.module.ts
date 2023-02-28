import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [{path:'', component: HomeComponent},
{path:'posts', component: PostsComponent},
{path:'pages', component: PagesComponent},
{path:'**', redirectTo: 'posts'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
