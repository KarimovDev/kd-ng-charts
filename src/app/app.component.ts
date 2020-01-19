import { Component } from '@angular/core';
import { CircleChartInputParams } from 'circle-chart/lib/circle-chart.models';
import { LineChartInputParams } from 'projects/line-chart/src/lib/line-chart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  chartParam: CircleChartInputParams | LineChartInputParams = {
    total: 150,
    current: 50,
    color: 'black',
  };
}
