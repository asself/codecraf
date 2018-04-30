import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Joke } from '../joke';
@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: [
    './joke-form.component.less'
  ],
  // encapsulation: ViewEncapsulation.Native
  encapsulation: ViewEncapsulation.Emulated
})
export class JokeFormComponent {
  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}

