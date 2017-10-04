import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NoContentComponent} from './no.content.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    NoContentComponent,
  ],
  exports: [NoContentComponent]
})
export class NoContentModule {
}
