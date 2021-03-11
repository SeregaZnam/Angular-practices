import { Component } from '@angular/core';

@Component({
  selector: 'cdk-virtual-scroll',
  template: `
    <cdk-virtual-scroll-viewport itemSize="20" style="height: 80vh">
      <div *cdkVirtualFor="let item of list">{{ item }}</div>
    </cdk-virtual-scroll-viewport>
  `,
})
export class CdkVirtualScrollComponent {
  list = Array.from({ length: 100000 }).map((_, i) => i);
}
