import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NumberFormatPipe } from './pipe/currency.pipe'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SipComponent } from './sip/sip.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SipComponent,
    NumberFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [NumberFormatPipe],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
