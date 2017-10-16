import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MoviesComponent } from './movies.component';
import { ItemMovieModule } from './itemMovie';
import { InputModule, StarModule } from '../../shared';

@NgModule({
  imports: [
    BrowserModule,
    InputModule,
    StarModule,
    ItemMovieModule
  ],
  declarations: [
    MoviesComponent
  ],
  exports: [MoviesComponent],
})
export class MoviesModule {
}
