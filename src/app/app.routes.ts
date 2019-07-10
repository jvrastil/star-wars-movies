import { Routes } from '@angular/router';
import { routesNames } from './app.routes.names';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';

export const appRoutes: Routes = [
  { path: routesNames.LIST, component: MovieListComponent },
  { path: `${routesNames.DETAIL}/:name`, component: MovieDetailComponent },
];
