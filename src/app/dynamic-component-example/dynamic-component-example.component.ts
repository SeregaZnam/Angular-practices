import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { AlertComponent } from './alert.component';

@Component({
  selector: 'dynamic-example-comp',
  template: `
    <ng-template #alertContainer></ng-template>
    <button (click)="createComponent('success')">Create success alert</button>
    <button (click)="createComponent('danger')">Create danger alert</button>
  `,
})
export class DynamicExampleComponent implements OnDestroy {
  @ViewChild('alertContainer', { read: ViewContainerRef }) container;
  componentRef: ComponentRef<any>;

  constructor(private readonly resolver: ComponentFactoryResolver) {}

  createComponent(type: string): void {
    this.container.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(
      AlertComponent
    );

    this.componentRef = this.container.createComponent(factory);

    this.componentRef.instance.type = type;

    this.componentRef.instance.output.subscribe((event) => console.log(event));
  }

  ngOnDestroy(): void {
    this.componentRef.destroy();
  }
}
