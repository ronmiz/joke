import { Component,
  OnInit,
   Input,
   DoCheck,
   OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    SimpleChanges
} from '@angular/core';
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
export class JokeComponent implements OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy{

  @Input('joke') data: jokeDataModule;
  constructor() {
    console.log(`This is invoked when Angular creates a component or directive by calling new on the class
    new - data is ${this.data}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges 
    Invoked every time there is a change in one of the input properties of the component.
    - data is ${this.data}`);

    for (let key in changes) {
      console.log(`${key} changed.
      Current: ${changes[key].currentValue}.
      Previous: ${changes[key].previousValue}`);
    }
  }

  ngOnInit() {
    console.log(`ngOnInit 
    Invoked when given component has been initialized.
    This hook is only called once after the first   
    - data is ${this.data}`);
  }

  ngDoCheck() {
    console.log(`ongDoCheck : 
    Invoked when the change detector of the given component is invoked. 
    It allows us to implement our own change detection algorithm for the given component.`)
  }

  ngAfterContentInit() {
    console.log(`ngAfterContentInit :
    Invoked after Angular performs any content projection into the components view`);
  }

  ngAfterContentChecked() {
    console.log(`ngAfterContentChecked : 
    Invoked each time the content of the given component
    has been checked by the change detection mechanism of Angular`);
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit : 
    Invoked when the component’s view has been fully initialized`);
  }

  ngAfterViewChecked() {
    console.log(`ngAfterViewChecked: 
    Invoked each time the view of the given component 
    has been checked by the change detection mechanism of Angular `);
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy :
    This method will be invoked just before Angular destroys the component.
    Use this hook to unsubscribe observables and detach event handlers to avoid memory leaks
    `);
  }


}


