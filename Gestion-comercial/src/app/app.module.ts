import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonsModule } from './commons/commons.module';
import { BillingModule } from './billing/billing.module';
import { CustomerModule } from './customer/customer.module';
import { SuppliersModule} from './suppliers/suppliers.module';
import { StoringModule} from './storing/storing.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule,
    BillingModule,
    CustomerModule, 
    SuppliersModule,
    StoringModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
