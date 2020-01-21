import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import {
  trigger,
  state,
  transition,
  animate,
  style,
} from '@angular/animations';

export interface LineChartInputParams {
  total: number;
  current: number;
  color: string;
  type?: string;
  size?: number;
}

@Component({
  selector: 'kd-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  animations: [
    trigger('animateFilling', [
      state(
        'final',
        style({
          width: '{{stopValue}}px',
        }),
        {
          params: {
            stopValue: '0',
          },
        }
      ),
      transition('*=>final', animate('1s ease-out')),
    ]),
  ],
})
export class LineChartComponent implements OnInit {
  @Input()
  private set params(value: LineChartInputParams) {
    this.inputParams = value;
  }

  public inputParams: LineChartInputParams;
  public currentState = 'initial';
  public stopValue = '0';

  constructor(
    private ref: ChangeDetectorRef,
  ) {
    ref.detach();
  }

  ngOnInit() {
    this.stopValue = (
      this.inputParams.current / (this.inputParams.total / 100) || 0
    ).toString();
    this.currentState = 'final';
    this.ref.detectChanges();
  }
}
