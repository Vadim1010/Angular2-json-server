import { NgModule } from '@angular/core';
import { LikeComponent } from './like.component';
import { InputModule } from '../input';

@NgModule({
  imports: [
    InputModule
  ],
  declarations: [
    LikeComponent
  ],
  exports: [LikeComponent]
})
export class LikeModule {
}
