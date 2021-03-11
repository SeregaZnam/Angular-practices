import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResizeObserverModule } from './core/resize-observer/module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgLoopDirective } from './core/directives/ng-loop/ng-loop.directive';
import { ListModule } from './dependency-injection-explained/module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent, NgLoopDirective],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ResizeObserverModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
