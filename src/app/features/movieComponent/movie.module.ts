import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MovieComponent} from './movie.component';
import {StarModule, InputModule} from '../../shared'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StarModule,
    InputModule
  ],
  declarations: [
    MovieComponent
  ],
  exports: [MovieComponent],
})

export class MovieModule {
}
