import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './commons/notfound/notfound.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { HomeComponent } from './commons/home/home.component';

const routes: Routes = [
  // {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path:"home", component: HomeComponent },
  {path:"customer", component:CustomerListComponent},
  {path:"**", component: NotfoundComponent},
  {path: 'storing', loadChildren: './storing/storing.module#StoringModule'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
