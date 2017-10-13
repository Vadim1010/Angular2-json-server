import { Routes } from '@angular/router';
import { MoviesRoutes, NoContentRoutes, MovieDetailRoutes, NewMovieRoutes } from './features';

export const ROUTES: Routes = [
  ...MoviesRoutes,
  ...MovieDetailRoutes,
  ...NewMovieRoutes,
  ...NoContentRoutes
];
