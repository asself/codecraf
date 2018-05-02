import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';
import { Joke } from '../joke-class';


@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html'
})
export class JokeComponent implements
  OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() joke: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();

  constructor() {
    // console.log(`new - data is ${this.joke}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(`ngOnChange - data is ${this.joke}`);
    // for (const key in changes) {
    //   console.log(`${key} changed.
    //   Current: ${changes[key].currentValue}.
    //   Previous: ${changes[key].previousValue}.`);
    // }
  }

  ngOnInit() {
    // console.log(`ngOnInit - data is ${this.joke}`);
  }

  ngDoCheck() {
    // console.log(`ngDoChecked`);
  }

  ngAfterContentInit() {
    // console.log(`ngAfterContentInit`);
  }

  ngAfterContentChecked() {
    // console.log(`ngAfterContentChecked`);
  }

  ngAfterViewInit() {
    // console.log(`ngAfterViewInit`);
  }

  ngAfterViewChecked() {
    // console.log(`ngAfterViewChecked`);
  }

  ngOnDestroy() {
    // console.log(`ngOnDestory`);
  }

  deleteJoke() {
    this.jokeDeleted.emit(this.joke);
  }
}
