import { Inject, Injectable } from '@angular/core';
import { API_URL } from './api-url.token';
import { Observable, of } from 'rxjs';
import { LogDebugger } from './log-debugger';
import { Item } from './types';

@Injectable()
export class DataService {
  constructor(
    private readonly logDebugger: LogDebugger,
    @Inject(API_URL) private readonly apiUrl: string
  ) {}

  getItems(): Observable<Item[]> {
    this.logDebugger.debug('Getting items...');
    // return this.http.get(`${this.apiUrl}/items`);
    return of([
      { id: 0, name: 'Pascal Precht', country: 'Germany' },
      { id: 1, name: 'Christoph Burgdorf', country: 'Germany' },
      { id: 2, name: 'Thomas Burleson', country: 'United States' },
    ]);
  }
}
