import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { FormRestaurantComponent } from './form-restaurant/form-restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';

@NgModule({
  declarations: [FormRestaurantComponent, RestaurantListComponent, RestaurantComponent, EditRestaurantComponent],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    FormsModule
  ],
  exports: [FormRestaurantComponent, RestaurantListComponent, RestaurantComponent, EditRestaurantComponent]
})
export class RestaurantModule { }
