import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResizeObserverModule } from './core/resize-observer/module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MutationObserverModule } from './core/mutation-observer/module';
import { MutationExampleComponent } from './mutation-example/mutation-example.component';

@NgModule({
  declarations: [AppComponent, MutationExampleComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ResizeObserverModule,
    ReactiveFormsModule,
    MutationObserverModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
