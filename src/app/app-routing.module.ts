import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadingStrategyDataEnum } from './core/constants/preloading-strategy-data.enum';
import { CustomPreloader } from './core/preloaders/custom-preloader';

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
  {
    path: 'cdk-virtual-scroll',
    loadChildren: () =>
      import('./cdk-virtual-scroll/module').then(
        (m) => m.CdkVirtualScrollModule
      ),
    data: {
      preload: PreloadingStrategyDataEnum.PRELOAD,
    },
  },
  {
    path: 'dependency-injection-explained',
    loadChildren: () =>
      import('./dependency-injection-explained/module').then(
        (m) => m.ListModule
      ),
  },
  {
    path: 'for-directive',
    loadChildren: () =>
      import('./for-directive/module').then((m) => m.ForDirectiveModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloader,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
