import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [MainComponent, ProjectComponent],
  exports: [MainComponent],
  entryComponents: [ProjectComponent],
})
export class NgComponentOutletExampleModule {}
