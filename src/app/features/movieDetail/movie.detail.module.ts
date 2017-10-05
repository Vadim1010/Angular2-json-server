import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MovieDetailComponent} from './movie.detail.component';
import {StarModule, InputModule} from '../../shared'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StarModule,
    InputModule
  ],
  declarations: [
    MovieDetailComponent
  ],
  exports: [MovieDetailComponent],
})

export class MovieDetailModule {
}
