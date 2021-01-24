import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alert',
  template: `
    <section>
      <h1 (click)="output.next('output')">Alert {{ type }}</h1>
    </section>
  `,
})
export class AlertComponent {
  @Input() type = 'success';
  @Output() output = new EventEmitter();
}
