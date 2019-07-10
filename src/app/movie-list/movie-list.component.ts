import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Angular2SwapiService, Film } from 'angular2-swapi';
import { routesNames } from '../app.routes.names';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  currentPage = 1;
  title = 'star-wars-movies';
  searcheTitle = '';

  movies$ = new Observable<Film[]>();
  sortedMovies: Film[] = [];

  readonly detailsRoute = `/${routesNames.DETAIL}`;
  readonly itemsPerPage = 5;

  constructor(private swapiService: Angular2SwapiService) {
    this.movies$ = this.swapiService.getFilms();

    this.movies$.subscribe(movies => {
      this.sortedMovies = movies.sort((a, b) => a.release_date > b.release_date ? 1 : -1);
    });
  }

  getMovieId(movie: Film): number {
    return this.sortedMovies.findIndex(a => a.title === movie.title) + 1;
  }
}
