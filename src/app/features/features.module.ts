import {NgModule} from '@angular/core';
import {MoviesModule} from './movies';
import {MovieModule} from './movieComponent';
import {NoContentModule} from './noContent'

@NgModule({
  imports: [
    MoviesModule,
    MovieModule,
    NoContentModule
  ],
  exports: [
    MoviesModule,
    MovieModule,
    NoContentModule
  ]
})
export class FeaturesModule {
}
