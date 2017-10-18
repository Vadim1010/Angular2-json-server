import { Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail.component';

export const MovieDetailRoutes: Routes = [
  {path: 'movie/:id', component: MovieDetailComponent}
];
