import {
  Attribute,
  Directive,
  ElementRef,
  Inject,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ResizeObserverService } from '../services/resize-observer.service';
import {
  RESIZE_OPTION_BOX,
  RESIZE_OPTION_BOX_DEFAULT,
} from '../tokens/resize-option-box';

export function boxExtractor({
  nativeElement,
}: ElementRef<Element>): ResizeObserverOptions['box'] {
  const attribute = nativeElement.getAttribute(
    'waResizeBox'
  ) as ResizeObserverOptions['box'];

  return boxFactory(attribute);
}

export function boxFactory(
  box: ResizeObserverOptions['box'] | null
): ResizeObserverOptions['box'] {
  return box || RESIZE_OPTION_BOX_DEFAULT;
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[waResizeObserver]',
  providers: [
    ResizeObserverService,
    {
      provide: RESIZE_OPTION_BOX,
      deps: [ElementRef],
      useFactory: boxExtractor,
    },
  ],
})
export class ResizeObserverDirective {
  @Output()
  readonly waResizeObserver: Observable<ResizeObserverEntry[]>;

  constructor(
    @Inject(ResizeObserverService) entries$: Observable<ResizeObserverEntry[]>,
    @Attribute('waResizeBox') box: ResizeObserverOptions['box']
  ) {
    this.waResizeObserver = entries$;
  }
}
