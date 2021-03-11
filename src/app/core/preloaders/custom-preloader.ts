import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PreloadingStrategyDataEnum } from '../constants/preloading-strategy-data.enum';

@Injectable({
  providedIn: 'root',
})
export class CustomPreloader implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data[PreloadingStrategyDataEnum.PRELOAD]) {
      return load();
    } else {
      // of(null);
      return load();
    }
  }
}
