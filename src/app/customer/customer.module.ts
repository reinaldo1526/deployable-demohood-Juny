import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersAccountComponent } from './customer-account/customer-account.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerRouterModule } from './customer-router.module';
@NgModule({
  declarations: [CustomersAccountComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    CustomerRouterModule
  ]
})
export class CustomerModule { }
