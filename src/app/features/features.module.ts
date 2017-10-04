import {NgModule} from '@angular/core';
import {MoviesModule} from './movies';
import {DescriptionMovieModule} from './descriptionMovie';
import {NoContentModule} from './noContent'

@NgModule({
  imports: [
    MoviesModule,
    DescriptionMovieModule,
    NoContentModule
  ],
  exports: [
    MoviesModule,
    DescriptionMovieModule,
    NoContentModule
  ]
})
export class FeaturesModule {
}
