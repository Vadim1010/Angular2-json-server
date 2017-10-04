import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MovieDescriptionComponent} from './description.movie.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    MovieDescriptionComponent
  ],
  exports: [MovieDescriptionComponent]
})

export class DescriptionMovieModule {
}
