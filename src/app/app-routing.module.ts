import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SipComponent } from './sip/sip.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sip-calculator',
    pathMatch: 'full'
  },
  {
    path: 'sip-calculator',
    component: SipComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
