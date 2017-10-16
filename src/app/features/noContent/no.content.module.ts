import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoContentComponent } from './no.content.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    NoContentComponent
  ],
  exports: [NoContentComponent]
})
export class NoContentModule {
}
