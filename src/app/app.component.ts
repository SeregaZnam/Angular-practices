import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { RESIZE_OBSERVER_SUPPORT } from '../core/resize-onservable/tokens/support';

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

  constructor(@Inject(RESIZE_OBSERVER_SUPPORT) readonly support: boolean) {}

  onResize(entry: ResizeObserverEntry[]): void {
    this.ratio = Math.round(entry[0].contentRect.width / 110);
  }
}
