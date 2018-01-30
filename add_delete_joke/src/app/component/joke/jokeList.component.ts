import { JokeFormComponent } from './joke-form.component';
import { Component } from '@angular/core';
import { jokeDataModule } from './jokeDataModule'
import { JokeComponent } from './joke.component';

//<joke-form (jokeCreated)="addJoke($event)"></joke-form>template>
@Component({
  selector: 'jokeList',
  template:`
  <app-joke *ngFor="let j of jokes" [joke]="j"></app-joke>
  <button type="button"
        class="btn btn-success"
        (click)="addJoke()">Add Joke
</button>
<button type="button"
        class="btn btn-danger"
        (click)="deleteJoke()">Clear Jokes
</button>
  `, 
  styleUrls: ['./joke.component.css']
})
export class JokeListComponent {


	jokes: Object[] =[];


	// constructor() {
  //   this.jokes = [
	//   new jokeDataModule("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
  //     new jokeDataModule("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
  //     new jokeDataModule("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
  //   ];
  // }
  // addJoke(joke) {
  //   this.jokes.unshift(joke);
  // }

  addJoke() {
    this.jokes.unshift(new jokeDataModule("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"));
  }
  deleteJoke(){
    this.jokes = [];
  }
}