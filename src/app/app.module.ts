import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NumberFormatPipe } from './pipe/currency.pipe'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SipComponent } from './sip/sip.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChitComponent } from './chit/chit.component';
import { NanToDashPipe } from './pipe/nan.pipe'
import { RoundDownPipe } from './pipe/roundup.pipe';
import { ToggleButtonModule } from 'primeng/togglebutton';

@NgModule({
  declarations: [
    AppComponent,
    SipComponent,
    NumberFormatPipe,
    ChitComponent,
    NanToDashPipe,
    RoundDownPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToggleButtonModule

  ],
  exports: [NumberFormatPipe, NanToDashPipe],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
