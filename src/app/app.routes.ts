import { Routes } from '@angular/router';
import { MoviesRoutes, NoContentRoutes, MovieDetailRoutes } from './features';

export const ROUTES: Routes = [
  ...MoviesRoutes,
  ...MovieDetailRoutes,
  ...NoContentRoutes
];
