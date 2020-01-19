import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';

export interface PieChartInputParam {
  id: number;
  current: number;
  color: string;
  dashOffset?: string;
  dashArray?: string;
  type?: string;
  size?: number;
  currentState?: string;
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
    trigger('animateClick', [
      state('clicked', style({ opacity: 0.4 })),
      state('unclicked', style({ opacity: 1 })),
      transition('unclicked=>clicked', animate('80ms')),
      transition('clicked=>unclicked', animate('.3s')),
    ]),
  ],
})
export class PieChartComponent implements OnInit {
  @Input()
  private set params(value: PieChartInputParams) {
    this.inputParams = value;
  }

  public inputParams: PieChartInputParams;
  public total = 0;
  public currentState = 'initial';

  constructor(private ref: ChangeDetectorRef) {
    ref.detach();
  }

  ngOnInit() {
    this.total = this.inputParams.reduce((acc, el) => (acc += el.current), 0);
    let currentOffset = 0;

    this.inputParams.forEach(el => {
      const currDashArray = el.current / (this.total / 100) || 0;
      el.dashArray = `${currDashArray} ${100 - currDashArray}`;
      el.dashOffset = (100 - currentOffset).toString();
      currentOffset += currDashArray;
      el.currentState = 'unclicked';
    });
    this.currentState = 'final';

    this.ref.detectChanges();
  }

  public circleMouseDown(targetId) {
    const currentParam = this.inputParams.find(
      el => el.id === parseInt(targetId, 10)
    );
    currentParam.currentState = 'clicked';
    this.ref.detectChanges();
  }

  public circleMouseUp(targetId) {
    const currentParam = this.inputParams.find(
      el => el.id === parseInt(targetId, 10)
    );
    currentParam.currentState = 'unclicked';
    this.ref.detectChanges();
  }
}
