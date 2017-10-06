import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ItemMovieComponent} from './item.movie.component';
import {InputModule, StarModule, LikeModule} from '../../../../shared';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    InputModule,
    StarModule,
    LikeModule
  ],
  declarations: [
    ItemMovieComponent,
  ],
  exports: [ItemMovieComponent]
})
export class ItemMovieModule {
}
