import { Component, Injector, OnInit, Type } from '@angular/core';
import { ProjectComponent } from './project.component';
import { BasicProject, Project } from './basic.project';

@Component({
  selector: 'my-main',
  template: `
    <ng-container
      *ngComponentOutlet="component; injector: customInjector"
    ></ng-container>
  `,
})
export class MainComponent implements OnInit {
  component: Type<any>;
  customInjector: Injector;

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    this.component = ProjectComponent;
    this.customInjector = Injector.create(
      [
        {
          provide: BasicProject,
          useValue: new Project('test name'),
        },
      ],
      this.injector
    );
  }
}
