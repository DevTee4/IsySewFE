import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  NbThemeModule } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // SlideshowModule,
    // NbThemeModule.forRoot(),
    // NbLayoutModule,
    NbThemeModule.forRoot({ name: 'default' })
    // SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
