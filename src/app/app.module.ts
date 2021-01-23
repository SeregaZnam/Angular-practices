import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResizeObserverModule } from './core/resize-observer/module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MutationObserverModule } from './core/mutation-observer/module';
import { MutationExampleComponent } from './mutation-example/mutation-example.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, MutationExampleComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ResizeObserverModule,
    ReactiveFormsModule,
    MutationObserverModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
