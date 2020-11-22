import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonsModule } from './commons/commons.module';
import { MyFormModuleModule } from './my-form-module/my-form-module.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Form03Component } from './app/my-form-module/form03/form03.component';


@NgModule({
  declarations: [
    AppComponent,
    Form03Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule,
    MyFormModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [Form03Component]
})
export class AppModule { }
