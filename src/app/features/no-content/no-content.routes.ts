import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content.component';

export const NoContentRoutes: Routes = [
  {path: '**', component: NoContentComponent}
];
