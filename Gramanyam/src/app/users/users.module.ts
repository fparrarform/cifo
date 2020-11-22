import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserListComponent, UserComponent, RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ],
  exports: [UserListComponent, UserComponent, RegisterComponent, LoginComponent]
})
export class UsersModule { }
