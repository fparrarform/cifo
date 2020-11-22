import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Form01Component } from './form01/form01.component';
import { Form02Component } from './form02/form02.component';
import { Form03Component } from './form03/form03.component';


const routes: Routes = [
  {path: '01', component: Form01Component},
  {path: '02', component: Form02Component},
  {path: '03', component: Form03Component},
  // {path: '**', redirectTo: 'form/form01', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFormModuleRoutingModule { }
