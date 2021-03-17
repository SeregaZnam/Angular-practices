import { Component } from '@angular/core';
import { TestTemplateService } from './test-template.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'test-template',
  template: `
    <input (input)="term$.next($event.target.value)" />
    <ul>
      <li *ngFor="let item of items$ | async"></li>
    </ul>
  `,
})
export class TestTemplateComponent {
  items$: Observable<object>;
  term$ = new Subject<string>();

  constructor(private readonly testTemplateService: TestTemplateService) {
    this.items$ = this.testTemplateService.search(this.term$);
  }
}
