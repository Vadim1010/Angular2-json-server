import {Routes} from '@angular/router';
import {MoviesComponent, NoContentComponent, MovieDetailComponent} from './features';

export const ROUTES: Routes = [
  {path: '', component: MoviesComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movie/:id', component: MovieDetailComponent},
  {path: '**', component: NoContentComponent}
];
