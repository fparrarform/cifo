import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UsersModule } from './users/users.module';
import { CommonsModule } from './commons/commons.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RouterModule, UsersModule, 
    CommonsModule, RestaurantModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
