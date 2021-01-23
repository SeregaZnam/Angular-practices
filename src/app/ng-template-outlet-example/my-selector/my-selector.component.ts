import {
  Component,
  ContentChild,
  Input,
  Output,
  TemplateRef,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-my-selector',
  templateUrl: './my-selector.component.html',
  styles: [
    `
      :host {
        display: grid;
        grid-template-columns: auto auto;
      }

      app-client-1,
      app-client-2 {
        margin: 1rem;
      }
    `,
  ],
})
export class MySelectorComponent<T extends { name: string }> {
  picked: T;

  @Input() label: string;
  @Input() options: T[];

  @ContentChild('selectedTemplate', { static: false })
  selectedTemplateRef: TemplateRef<any>;

  @ContentChild('optionTemplate', { static: false })
  optionTemplateRef: TemplateRef<any>;

  @Output() selectionChanged = new EventEmitter<T>();

  selectOption(option: T): void {
    this.picked = option;
    this.selectionChanged.emit(option);
  }
}
