import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SuppliersRequestComponent } from './suppliers-request/suppliers-request.component';

@NgModule({
  declarations: [SupplierListComponent, SuppliersRequestComponent],
  imports: [
    CommonModule,
    SuppliersRoutingModule
  ]
})
export class SuppliersModule { }
