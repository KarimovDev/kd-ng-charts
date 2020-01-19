import { NgModule } from '@angular/core';
import { PieChartComponent } from './pie-chart.component';
import { CommonModule } from '@angular/common';
import { KbToSizePipe } from './kb-to-size.pipe';

@NgModule({
  declarations: [PieChartComponent, KbToSizePipe],
  imports: [CommonModule],
  exports: [PieChartComponent],
})
export class PieChartModule {}
