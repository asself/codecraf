import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


import { JokeComponent } from './joke/joke.component';
import { JokeFormComponent } from './joke-form';
import { JokeListComponent } from './joke-list';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeFormComponent,
    JokeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
