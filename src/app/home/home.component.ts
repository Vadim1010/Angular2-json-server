import {
  Component,
  OnInit
} from '@angular/core';

import {AppState} from '../app.service';

@Component({

  selector: 'home',
  providers: [],
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})
export class HomeComponent implements OnInit {
  public localState = {value: ''};

  constructor(public appState: AppState,) {
  }

  public ngOnInit() {
    console.log('hello `Home` component');
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
