import { NgModule } from '@angular/core';
import { MoviesModule } from './movies';
import { MovieDetailModule } from './movieDetail';
import { NoContentModule } from './no-content';
import { NewMovieModule } from './newMovie';

@NgModule({
  imports: [
    MoviesModule,
    MovieDetailModule,
    NoContentModule,
    NewMovieModule
  ],
  exports: [
    MoviesModule,
    MovieDetailModule,
    NoContentModule,
    NewMovieModule
  ]
})
export class FeaturesModule {
}
