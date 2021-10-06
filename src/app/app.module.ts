import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RandComponent } from './rand.component';

import { AppRouteModule } from './app-route.module';

@NgModule({
  declarations: [
    AppComponent,
   RandComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
