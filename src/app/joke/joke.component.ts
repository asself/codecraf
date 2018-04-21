import { Component, Input } from '@angular/core';
import { Joke } from '../joke-form/joke-form.component';
@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html'
})
export class JokeComponent{
  @Input()
  private joke: Joke;
}
