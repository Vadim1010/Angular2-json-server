import {NgModule} from '@angular/core';
import {FooterModule} from './footer';
import {HeaderModule} from './header';
import {InputModule} from './input';
import {StarModule} from './star';
// import {LikeModule} from './like'

@NgModule({
  imports: [
    FooterModule,
    HeaderModule,
    InputModule,
    StarModule,
    // LikeModule
  ],
  exports: [
    FooterModule,
    HeaderModule,
    InputModule,
    StarModule,
    // LikeModule
  ]
})
export class SharedModule {
}
