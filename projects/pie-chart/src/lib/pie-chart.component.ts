import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export interface PieChartInputParam {
  id: number;
  current: number;
  color: string;
  dashOffset?: string;
  dashArray?: string;
  type?: string;
  size?: number;
}

export type PieChartInputParams = Array<PieChartInputParam>;

@Component({
  selector: 'kd-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  animations: [
    trigger('animateFilling', [
      state(
        'final',
        style({
          'stroke-dashoffset': '{{dashOffset}}',
          'stroke-dasharray': '{{dashArray}}',
        }),
        {
          params: {
            dashArray: '0 100',
            dashOffset: '0',
          },
        }
      ),
      transition('*=>final', animate('1s ease-out')),
    ]),
  ],
})
export class PieChartComponent implements OnInit {
  @Input()
  private set params(value: PieChartInputParams) {
    this.inputParams = value;
    this.ref.detectChanges();
  }

  public inputParams: PieChartInputParams;
  public currentState = 'initial';

  constructor(private ref: ChangeDetectorRef) {
    ref.detach();
  }

  ngOnInit() {
    const total = this.inputParams.reduce((acc, el) => (acc += el.current), 0);
    let currentOffset = 0;

    this.inputParams.forEach(el => {
      const currDashArray = el.current / (total / 100) || 0;
      el.dashArray = `${currDashArray} ${100 - currDashArray}`;
      el.dashOffset = (100 - currentOffset).toString();
      currentOffset += currDashArray;
    });

    this.currentState = 'final';
    this.ref.detectChanges();
  }
}
