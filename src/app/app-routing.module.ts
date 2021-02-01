import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dynamic-example',
    loadChildren: () =>
      import('./dynamic-component-example/module').then(
        (m) => m.DynamicExampleModule
      ),
  },
  {
    path: 'mutation-example',
    loadChildren: () =>
      import('./mutation-example/module').then((m) => m.MutationExampleModule),
  },
  {
    path: 'ng-component-outlet-example',
    loadChildren: () =>
      import('./ng-component-outlet-example/module').then(
        (m) => m.NgComponentOutletExampleModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
