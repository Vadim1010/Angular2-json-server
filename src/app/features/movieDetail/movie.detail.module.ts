import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MovieDetailComponent } from './movie.detail.component';
import { StarModule, InputModule, LikeModule } from '../../shared';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
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
