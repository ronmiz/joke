import { Component, OnInit, Input,} from '@angular/core';
import { jokeDataModule } from './jokeDataModule';

@Component({
  selector: 'app-joke',
  template:`<div class="card card-block">
  <h4 class="card-title">{{data.setup}}</h4>
  <p class="card-text"
     [hidden]="data.hide">{{data.punchline}}</p>
  <a (click)="data.toggle()"
     class="btn btn-warning">Tell Me
  </a>
</div>`, 
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {

  @Input('joke') data: jokeDataModule;
  
  constructor() {
    console.log(`This is invoked when Angular creates a component or directive by calling new on the class
    new - data is ${this.data}`);
  }

}


