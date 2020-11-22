import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RestaurantModule } from '../restaurant/restaurant.module';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

@NgModule({
  declarations: [NavBarComponent, HomeComponent, NotFoundComponent, UnderConstructionComponent],
  imports: [
    CommonModule,
    CommonsRoutingModule,
    RestaurantModule
  ],
  exports: [NavBarComponent, HomeComponent, NotFoundComponent]
})
export class CommonsModule { }
