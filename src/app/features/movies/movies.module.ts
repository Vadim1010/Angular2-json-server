import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MoviesComponent} from './movies.component';
import {InputModule, StarModule} from '../../shared';
import {DataService} from '../../core';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    InputModule,
    StarModule
  ],
  declarations: [
    MoviesComponent,
  ],
  exports: [MoviesComponent],
  providers: [DataService]
})
export class MoviesModule {
}
