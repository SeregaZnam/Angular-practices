import { NgModule } from '@angular/core';
import { ForDirectiveComponent, ThreeDirective } from './component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ForDirectiveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [ForDirectiveComponent, ThreeDirective],
  exports: [ForDirectiveComponent, ThreeDirective],
})
export class ForDirectiveModule {}
