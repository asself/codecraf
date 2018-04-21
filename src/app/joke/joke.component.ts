import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html'
})
export class JokeComponent {
  @Input() joke: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();

  deleteJoke() {
    this.jokeDeleted.emit(this.joke);
  }
}
