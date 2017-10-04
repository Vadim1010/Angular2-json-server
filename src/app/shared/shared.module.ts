import {NgModule} from '@angular/core';
import {FooterModule} from './footer';
import {HeaderModule} from './header';
import {InputModule} from './input';
import {StarModule} from './star';

@NgModule({
  imports: [
    FooterModule,
    HeaderModule,
    InputModule,
    StarModule
  ],
  exports: [
    FooterModule,
    HeaderModule,
    InputModule,
    StarModule
  ]
})
export class SharedModule {
}
