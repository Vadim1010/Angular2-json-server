import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NewMovieComponent } from './new-movie.component';
import { InputModule } from '../../shared';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    InputModule
  ],
  declarations: [
    NewMovieComponent
  ],
  exports: [NewMovieComponent],
})
export class NewMovieModule {
}
