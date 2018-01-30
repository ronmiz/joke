import { jokeDataModule } from './component/joke/jokeDataModule';
import { JokeComponent } from './component/joke/joke.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template:` <h1>the jokes</h1>
        <jokeList>
                <app-joke [joke]="joke"> 
                  <span class="setup">{{ joke.setup }}?</span>
                  <h1 class="punchline">{{ joke.punchline }}</h1>
                </app-joke>
              </jokeList>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  joke: jokeDataModule = new jokeDataModule("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’");
  title = 'app';
}
