import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderModule } from 'primeng/slider'
import { ChartModule } from 'primeng/chart'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SliderModule,
    ChartModule

  ],
  exports: [SliderModule, ChartModule]
})
export class SharedModule { }
