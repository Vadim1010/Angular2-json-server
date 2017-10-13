import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NewMovieComponent } from './new.movie.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    NewMovieComponent
  ],
  exports: [NewMovieComponent],
})
export class NewMovieModule {
}
