import {NgModule} from '@angular/core';
import {ItemMovieModule} from './itemMovie'
@NgModule({
  imports: [
    ItemMovieModule,
  ],
  exports: [
    ItemMovieModule,
  ]
})
export class SharedModule {
}
