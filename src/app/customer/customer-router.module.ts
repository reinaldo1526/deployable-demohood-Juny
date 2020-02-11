import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomersAccountComponent } from './customer-account/customer-account.component';
const routes: Routes = [
  {
    path: '', component: CustomersAccountComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CustomerRouterModule { }