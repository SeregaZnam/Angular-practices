import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from './api-url.token';
import { DataService } from './data.service';
import { LogDebugger } from './log-debugger';
import { ConsoleService } from './console.service';

@Component({
  selector: 'list-component',
  template: `
    <ul>
      <li *ngFor="let item of items | async">
        {{ item.id }}: {{ item.name }} lives in {{ item.country }}
      </li>
    </ul>
  `,
  providers: [
    DataService,
    ConsoleService,
    {
      provide: LogDebugger,
      useFactory: (consoleService) => {
        return new LogDebugger(consoleService, true);
      },
      deps: [ConsoleService],
    },
    {
      provide: API_URL,
      useValue: 'http://localhost:4200/api',
    },
  ],
})
export class ListComponent implements OnInit {
  items: Observable<Array<unknown>>;

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.items = this.dataService.getItems();
  }
}
