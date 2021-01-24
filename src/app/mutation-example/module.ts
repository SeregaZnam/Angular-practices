import { NgModule } from '@angular/core';
import { MutationExampleComponent } from './mutation-example.component';
import { MutationObserverModule } from '../core/mutation-observer/module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MutationExampleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MutationObserverModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MutationExampleComponent],
  exports: [MutationExampleComponent],
})
export class MutationExampleModule {}
