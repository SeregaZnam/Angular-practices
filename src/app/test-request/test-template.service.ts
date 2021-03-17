import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestTemplateService {
  constructor(private readonly http: HttpClient) {}
  search(terms$: Observable<string>, debounceMs = 400): Observable<object> {
    return terms$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((term) => this.rawsearch(term))
    );
  }

  rawsearch(term: string): Observable<object> {
    const search = new URLSearchParams();
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');

    return this.http.jsonp(
      'https://en.wikipedia.org/wiki/Main_Page',
      'callback'
    );
  }
}
