import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { RESIZE_OBSERVER_SUPPORT } from './core/resize-observer/tokens/support';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'angular-practices';
  ratio = 0;
  widthPercent = 50;
  numbers = [1, 2, 3];

  constructor(@Inject(RESIZE_OBSERVER_SUPPORT) readonly support: boolean) {}

  onResize(entry: ResizeObserverEntry[]): void {
    this.ratio = Math.round(entry[0].contentRect.width / 110);
  }
}
