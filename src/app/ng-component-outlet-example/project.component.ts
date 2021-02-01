import { Component } from '@angular/core';
import { BasicProject } from './basic.project';

@Component({
  selector: 'my-project',
  template: 'Project <b>{{ name }}</b>',
})
export class ProjectComponent {
  name: string;

  constructor(project: BasicProject) {
    this.name = project.name;
  }
}
