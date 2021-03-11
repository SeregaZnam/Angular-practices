import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkVirtualScrollComponent } from './cdk-virtual-scroll.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../ng-component-outlet-example/main.component';

const routes: Routes = [
  {
    path: '',
    component: CdkVirtualScrollComponent,
  },
];

@NgModule({
  declarations: [CdkVirtualScrollComponent],
  imports: [ScrollingModule, RouterModule.forChild(routes)],
  exports: [CdkVirtualScrollComponent],
})
export class CdkVirtualScrollModule {}
