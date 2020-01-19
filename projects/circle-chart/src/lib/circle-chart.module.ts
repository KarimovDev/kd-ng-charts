import { NgModule } from '@angular/core';
import { CircleChartComponent } from './circle-chart.component';
import { KbToSizeNumbersPipe } from './kb-to-size-numbers.pipe';
import { KbToSizePostfixPipe } from './kb-to-size-postfix.pipe';

@NgModule({
  declarations: [
    CircleChartComponent,
    KbToSizeNumbersPipe,
    KbToSizePostfixPipe,
  ],
  providers: [KbToSizeNumbersPipe],
  exports: [CircleChartComponent],
})
export class CircleChartModule {}
