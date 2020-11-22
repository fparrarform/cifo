import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { form01 } from './my-form-module/form01/form01.component'


const routes: Routes = [
  {path: 'form', loadChildren: () => import('./my-form-module/my-form-module.module').then(mod => mod.MyFormModuleModule)}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
