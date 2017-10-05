import {Routes} from '@angular/router';
import {MoviesComponent, NoContentComponent, MovieComponent} from './features';


import {DataResolver} from './app.resolver';

export const ROUTES: Routes = [
  {path: '', component: MoviesComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movie/:id', component: MovieComponent},
  {path: '**', component: NoContentComponent}
];
