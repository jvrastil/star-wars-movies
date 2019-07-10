import { Pipe, PipeTransform } from '@angular/core';
import { Film } from 'angular2-swapi';

@Pipe({
  name: 'filterByTitles',
})
export class FilterByTitlesPipe implements PipeTransform {
  transform(items: Film[], searchText: string): any[] {
    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.title.toLocaleLowerCase()
        .includes(searchText);
    });
  }
}
