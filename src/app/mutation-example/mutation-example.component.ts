import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mutation-example',
  templateUrl: './mutation-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MutationExampleComponent {
  toggled = false;

  disabled: true | null = null; //null so the attribute gets removed

  title = 'title';

  text = 'text';

  ignored = 'Ignored aria-label attribute';

  toggleDOM(): void {
    this.toggled = !this.toggled;
  }

  toggleAttr(): void {
    this.disabled = !this.disabled || null;
  }

  log(entries: MutationRecord[]): void {
    console.log(entries);
  }
}
