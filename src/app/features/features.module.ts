import {NgModule} from '@angular/core';
import {MoviesModule} from './movies';
import {MovieDetailModule} from './movieDetail';
import {NoContentModule} from './noContent'

@NgModule({
  imports: [
    MoviesModule,
    MovieDetailModule,
    NoContentModule
  ],
  exports: [
    MoviesModule,
    MovieDetailModule,
    NoContentModule
  ]
})
export class FeaturesModule {
}
