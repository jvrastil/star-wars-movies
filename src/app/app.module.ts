import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Angular2SwapiModule } from 'angular2-swapi';

import { AppComponent } from './app.component';
import { FilterByTitlesPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    FilterByTitlesPipe
  ],
  imports: [
    BrowserModule,
    Angular2SwapiModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
