import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, NavBarComponent, NotfoundComponent, HomeComponent, FooterComponent],
  imports: [
    CommonModule,
    CommonsRoutingModule
  ],
  exports: [HeaderComponent, NavBarComponent, NotfoundComponent, HomeComponent, FooterComponent]
})
export class CommonsModule { }
