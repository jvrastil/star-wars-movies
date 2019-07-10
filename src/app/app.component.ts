import { Component } from '@angular/core';
import { Angular2SwapiService, Film } from 'angular2-swapi';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'star-wars-movies';
  searcheTitle = '';

  movies$ = new Observable<Film[]>();

  constructor(private swapiService: Angular2SwapiService) {
    this.movies$ = this.swapiService.getFilms();
  }
}
