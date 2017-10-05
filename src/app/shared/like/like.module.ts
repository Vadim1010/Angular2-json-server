import {NgModule} from '@angular/core';
import {LikeComponent} from './like.component';
import {InputComponent} from '../input'

@NgModule({
  declarations: [
    LikeComponent,
    InputComponent
  ],
  exports: [LikeComponent]
})
export class LikeModule {
}
