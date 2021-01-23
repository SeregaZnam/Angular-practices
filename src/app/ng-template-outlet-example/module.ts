import { NgModule } from '@angular/core';
import { MySelectorComponent } from './my-selector/my-selector.component';
import { CommonModule } from '@angular/common';
import { Client1Component } from './client-1/client-1.component';
import { Client2Component } from './client-2/client-2.component';

@NgModule({
  declarations: [MySelectorComponent, Client1Component, Client2Component],
  exports: [MySelectorComponent, Client1Component, Client2Component],
  imports: [CommonModule],
})
export class MySelectorModule {}
