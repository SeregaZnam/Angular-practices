import { NgModule } from '@angular/core';
import { ResizeObserverDirective } from './directives/resize-onservable.directive';

@NgModule({
  declarations: [ResizeObserverDirective],
  exports: [ResizeObserverDirective],
})
export class ResizeObserverModule {}
