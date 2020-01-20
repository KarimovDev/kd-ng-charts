import { NgModule } from '@angular/core';
import { PieChartComponent } from './pie-chart.component';
import { CommonModule } from '@angular/common';
import { KbToSizePipe } from './kb-to-size.pipe';
import { AdditionalLineChartComponent } from './additional-line-chart/additional-line-chart.component';
import { PieChartService } from './pie-chart.service';

@NgModule({
  declarations: [PieChartComponent, AdditionalLineChartComponent, KbToSizePipe],
  imports: [CommonModule],
  exports: [PieChartComponent, AdditionalLineChartComponent],
  providers: [PieChartService],
})
export class PieChartModule {}
