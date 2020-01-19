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
      current: 45,
      color: 'blue',
    },
    {
      id: 2,
      current: 15,
      color: 'green',
    },
    {
      id: 3,
      current: 75,
      color: 'red',
    },
  ];
}
