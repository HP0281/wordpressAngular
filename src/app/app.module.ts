import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PagesComponent } from './pages/pages.component';
import { DynamicHooksModule, HookParserEntry, OutletOptions } from 'ngx-dynamic-hooks';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MatCarouselModule } from 'ng-mat-carousel';

const componentParsers: Array<HookParserEntry> = [
  {component: PostsComponent},
  // ...
];
const componentOptions: Array<OutletOptions> = [
  {sanitize: false},
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HeaderComponent,
    PagesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DynamicHooksModule.forRoot({
      globalParsers: componentParsers,
      globalOptions: componentOptions[0]
    }),
    BrowserAnimationsModule,
    MaterialModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
