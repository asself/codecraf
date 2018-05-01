import { Component, ViewChild, AfterViewInit} from '@angular/core';
import { Joke } from '../joke-class';
import { JokeComponent } from '../joke/';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html'
})
export class JokeListComponent implements AfterViewInit {

  jokes: Joke[] =  [
    new Joke('What did the cheese say when it looked in the mirror', 'Hello-me (Halloumi)'),
    new Joke('What kind of cheese do you use to disguise a small horse', 'Mask-a-pony (Mascarpone)')
  ];

  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  constructor() {
    console.log(`new- jokeViewChild is ${this.jokeViewChild}`);
  }
  ngAfterViewInit() {
    console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);
  }
}
