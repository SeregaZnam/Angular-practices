import { NgModule } from '@angular/core';
import { DynamicExampleComponent } from './dynamic-component-example.component';
import { AlertComponent } from './alert.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DynamicExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [DynamicExampleComponent],
  exports: [DynamicExampleComponent],
  entryComponents: [AlertComponent],
})
export class DynamicExampleModule {}
