import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarPipe } from './pipes/avatar.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    AppComponent,
    AvatarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
