import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { HomeComponent } from './commons/home/home.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserComponent } from './users/user/user.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { RestaurantComponent } from './restaurant/restaurant/restaurant.component';
import { FormRestaurantComponent } from './restaurant/form-restaurant/form-restaurant.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { UnderConstructionComponent } from './commons/under-construction/under-construction.component';
import { EditRestaurantComponent } from './restaurant/edit-restaurant/edit-restaurant.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'user', component: UserListComponent},
  {path: 'user/:id', component: UserComponent },
  {path: 'restaurants', component: RestaurantListComponent},
  {path: 'restaurant/:id', component: RestaurantComponent},
  {path: 'register/restaurant/:id', component: FormRestaurantComponent},
  {path: 'register/user', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'underConstruction', component: UnderConstructionComponent},
  {path: 'editRestaurant/:id', component: EditRestaurantComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
