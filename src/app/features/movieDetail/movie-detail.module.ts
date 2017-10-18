import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MovieDetailComponent } from './movie-detail.component';
import { StarModule, InputModule, LikeModule } from '../../shared';

@NgModule({
  imports: [
    BrowserModule,
    StarModule,
    InputModule,
    LikeModule
  ],
  declarations: [
    MovieDetailComponent
  ],
  exports: [MovieDetailComponent]
})

export class MovieDetailModule {
}
