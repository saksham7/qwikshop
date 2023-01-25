import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path: 'refund-policy',
    component: RefundPolicyComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
