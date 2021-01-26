import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  KeyValueDiffers,
} from '@angular/core';

@Component({
  selector: 'do-check-example',
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoCheckExampleComponent implements DoCheck {
  @Input() data: { name: string };
  private differ = this.differs.find({}).create();

  constructor(
    private cdr: ChangeDetectorRef,
    private differs: KeyValueDiffers
  ) {}

  ngDoCheck(): void {
    const changes = this.differ.diff(this.data);
    if (changes) {
      console.log('Object changed');
      changes.forEachChangedItem((item) => console.log('Changed', item));
      changes.forEachAddedItem((item) => console.log('Added', item));
      changes.forEachRemovedItem((item) => console.log('Removed', item));
      this.cdr.markForCheck();
    } else {
      console.log('No changes');
    }
  }
}
