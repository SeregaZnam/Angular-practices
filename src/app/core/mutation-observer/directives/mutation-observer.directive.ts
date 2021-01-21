import {
  Directive,
  ElementRef,
  OnDestroy,
  Output,
  EventEmitter,
  Inject,
  Attribute,
} from '@angular/core';
import { MUTATION_OBSERVER_INIT } from '../tokens/mutation-observer-init';
import { mutationObserverInitFactory } from '../utils/mutation-observer-init-factory';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[waMutationObserver]',
  exportAs: 'MutationObserver',
  providers: [
    {
      provide: MUTATION_OBSERVER_INIT,
      deps: [ElementRef],
      useFactory: mutationObserverInitFactory,
    },
  ],
})
export class MutationObserverDirective
  extends MutationObserver
  implements OnDestroy {
  @Output() readonly waMutationObserver = new EventEmitter<MutationRecord[]>();

  constructor(
    @Inject(ElementRef) { nativeElement }: ElementRef<Node>,
    @Inject(MUTATION_OBSERVER_INIT) config: MutationObserverInit,
    @Attribute('attributeFilter') attributeFilter: unknown,
    @Attribute('attributeOldValue') attributeOldValue: unknown,
    @Attribute('attributes') attributes: unknown,
    @Attribute('characterData') characterData: unknown,
    @Attribute('characterDataOldValue') characterDataOldValue: unknown,
    @Attribute('childList') childList: unknown,
    @Attribute('subtree') subtree: unknown
  ) {
    super((records) => {
      this.waMutationObserver.emit(records);
    });

    this.observe(nativeElement, config);
  }

  ngOnDestroy() {
    this.disconnect();
  }
}
