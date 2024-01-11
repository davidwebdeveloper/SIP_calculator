import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SipComponent } from './sip/sip.component';
import { ChitComponent } from './chit/chit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'chit-calculator',
    pathMatch: 'full'
  },
  {
    path: 'sip-calculator',
    component: SipComponent
  },
  {
    path: 'chit-calculator',
    component: ChitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
