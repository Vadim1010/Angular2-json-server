import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './features';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'movies',  component: NoContentComponent },
  // { path: 'about', component: AboutComponent },
  { path: '**',    component: NoContentComponent }
];
