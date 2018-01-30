import { JokeFormComponent } from './joke-form.component';
import { Component, ViewChild, ViewChildren,QueryList,ElementRef,ContentChild } from '@angular/core';
import { jokeDataModule } from './jokeDataModule'
import { JokeComponent } from './joke.component';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'jokeList',
  template:`
  <h4 #header>View Jokes</h4>
  <app-joke *ngFor="let j of jokes" [joke]="j"> 
    <span class="setup">{{ j.setup }}?</span>
    <h1 class="punchline">{{ j.punchline }}</h1>
  </app-joke>

<h4>Content Jokes</h4>
<ng-content></ng-content> 
  `, 
  styleUrls: ['./joke.component.css']
})
export class JokeListComponent implements AfterViewInit{
  //
  @ViewChild(JokeComponent) jokeViewChild: JokeComponent; 
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>; 
  @ViewChild("header") headerEl: ElementRef; 

  @ContentChild(JokeComponent) jokeContentChild: JokeComponent

	jokes: Object[] =[];


	constructor() {
   
    this.jokes = [
	    new jokeDataModule("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
      new jokeDataModule("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
    ];
    console.log(`new - jokeViewChild is ${this.jokeViewChild}`);
  }

  ngAfterContentInit() {
    console.log(`ngAfterContentInit - jokeContentChild is ${this.jokeContentChild}`);
  }
  ngAfterViewInit() {
    console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);
    let jokes: JokeComponent[] = this.jokeViewChildren.toArray(); 
    console.log(jokes);

    console.log(`ngAfterViewInit - headerEl is ${this.headerEl}`);
    this.headerEl.nativeElement.textContent = "Best Joke Machine";
  }
}