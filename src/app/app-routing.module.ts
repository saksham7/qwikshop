import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path: 'refund-policy',
    component: RefundPolicyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
