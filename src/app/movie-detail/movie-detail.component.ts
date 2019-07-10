import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { Angular2SwapiService, Film, People } from 'angular2-swapi';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movie$: Promise<Film>;
  characters$ = new Observable<People[]>();
  errorOccured = false;
  errorMsg = '';

  constructor(private route: ActivatedRoute, private swapiService: Angular2SwapiService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movie$ = this.swapiService.getFilm(params['name']).toPromise();
    });


    let requests = [];
    this.movie$.then(movie => {
      requests = movie.characters.map(character => {
        const array = character.split('/');
        return this.swapiService.getPeopleById(Number(array[array.length - 2]));
      });

      this.characters$ = forkJoin(requests);
    }).catch(reason => {
      this.errorOccured = true;
      this.errorMsg = reason;
    });
  }
}
