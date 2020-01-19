import { NgModule } from '@angular/core';
import { PieChartComponent } from './pie-chart.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PieChartComponent],
  imports: [
    CommonModule
  ],
  exports: [PieChartComponent]
})
export class PieChartModule { }
