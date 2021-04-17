import {
  Component,
  Directive,
  ElementRef,
  Input, OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[three]',
})
export class ThreeDirective {
  @Input() set threeFrom({ one, two, three }) {
    this.view.clear();

    this.view.createEmbeddedView(this.template, {
      $implicit: one,
    });

    this.view.createEmbeddedView(this.template, {
      $implicit: two,
    });

    this.view.createEmbeddedView(this.template, {
      $implicit: three,
    });
  }

  constructor(
    private readonly el: ElementRef,
    private readonly view: ViewContainerRef,
    private readonly template: TemplateRef<any>
  ) {}
}

@Component({
  selector: 'fro-directive',
  template: ` <h1 *three="let message from messages">{{ message }}</h1> `,
})
export class ForDirectiveComponent {
  messages = {
    one: 'One is awesome',
    two: 'Two is better',
    three: 'Three is best!',
  };

  constructor() {
    setInterval(() => {
      this.messages = {
        one: `One ${Math.random().toString().slice(0, 3)}`,
        two: `Two ${Math.random().toString().slice(0, 3)}`,
        three: `Tree ${Math.random().toString().slice(0, 3)}`,
      };
    }, 1000);
  }
}
