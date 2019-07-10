import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Angular2SwapiModule } from 'angular2-swapi';

import { AppComponent } from './app.component';
import { FilterByTitlesPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { appRoutes } from './app.routes';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterByTitlesPipe,
    MovieDetailComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    Angular2SwapiModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
