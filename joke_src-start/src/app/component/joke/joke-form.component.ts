import { JokeComponent } from './joke.component';
import { Component, Input, Output,EventEmitter } from '@angular/core';
import { jokeDataModule } from './jokeDataModule';



@Component({
	selector: 'joke-form',
	template: `
<div class="card card-block">
  <h4 class="card-title">Create Joke</h4>
  <div class="form-group">
    <input type="text"
           class="form-control"
           placeholder="Enter the setup"
           #setup>
  </div>
  <div class="form-group">
    <input type="text"
           class="form-control"
           placeholder="Enter the punchline"
           #punchline>
  </div>
  <button type="button"
          class="btn btn-primary"
          (click)="createJoke(setup.value, punchline.value)">Create
  </button>
</div>
  `
})
export class JokeFormComponent {
	@Output() jokeCreated = new EventEmitter<jokeDataModule>();

	createJoke(setup: string, punchline: string) {
		this.jokeCreated.emit(new jokeDataModule(setup, punchline));
	}
}