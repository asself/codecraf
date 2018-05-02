import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


import { JokeComponent } from './joke/joke.component';
import { JokeFormComponent } from './joke-form';
import { JokeListComponent } from './joke-list';
import { CarouselComponent } from './carousel';
import { CarouselItemComponent } from './carousel-item';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeFormComponent,
    JokeListComponent,
    CarouselComponent,
    CarouselItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
