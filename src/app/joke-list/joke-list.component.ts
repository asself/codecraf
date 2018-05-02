import {Component, ViewChild, AfterViewInit, ElementRef, ContentChild, AfterContentInit, ContentChildren} from '@angular/core';
import { ViewChildren, QueryList } from '@angular/core';
import { Joke } from '../joke-class';
import { JokeComponent } from '../joke/';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html'
})
export class JokeListComponent implements AfterViewInit, AfterContentInit {

  jokes: Joke[] =  [
    new Joke('What did the cheese say when it looked in the mirror', 'Hello-me (Halloumi)'),
    new Joke('What kind of cheese do you use to disguise a small horse', 'Mask-a-pony (Mascarpone)')
  ];
  // it finds more than one it will just give us the first one it finds
  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;

  // the @ViewChildren decorator which matches all JokeComponent`s and stores them in a `QueryList called jokeViewChildren
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  @ViewChild('header') headerEl: ElementRef;

  /********** div***************/
  @ContentChild(JokeComponent) jokeContentChild: JokeComponent;
  @ContentChildren(JokeComponent) jokeContentChildren: QueryList<JokeComponent>;

  constructor() {
    console.dir('new- jokeViewChild is', this.jokeViewChild);
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit - jokeContentChild is', this.jokeContentChild);

    const jokes: JokeComponent[] = this.jokeContentChildren.toArray();
    console.log('jokes for Project', jokes);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit - jokeViewChild is', this.jokeViewChild);
    const jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log('jokes is====', jokes);

    console.log('ngAfterViewInit - headerEl is', this.headerEl);
    this.headerEl.nativeElement.textContent = 'Best Joke Machine';
  }

}
