import { Component } from '@angular/core';
import { CircleChartInputParams } from 'circle-chart/lib/circle-chart.models';
import { LineChartInputParams } from 'projects/line-chart/src/lib/line-chart.component';
import { PieChartInputParams } from 'projects/pie-chart/src/lib/pie-chart.component';

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

  pieChartParam: PieChartInputParams = [
    {
      id: 1,
      total: 1000201200,
      current: 45234234,
      color: 'blue',
    },
    {
      id: 2,
      total: 16543534,
      current: 15543534,
      color: 'green',
    },
    {
      id: 3,
      total: 95234234,
      current: 75234234,
      color: 'red',
    },
  ];
}
