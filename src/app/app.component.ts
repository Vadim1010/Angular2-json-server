/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  constructor (public appState: AppState) {
  }

  public ngOnInit () {
    console.log('Initial App State', this.appState.state);
  }
}
