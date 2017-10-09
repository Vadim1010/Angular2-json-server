import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from './movies.component';
import { ItemMovieModule } from './shared';
import { InputModule, StarModule } from '../../shared';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
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
