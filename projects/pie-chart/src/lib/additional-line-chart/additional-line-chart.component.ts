import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import {
  trigger,
  state,
  transition,
  animate,
  style,
  keyframes,
} from '@angular/animations';
import { PieChartService } from '../pie-chart.service';
import { Subscription } from 'rxjs';

export interface LineChartInputParams {
  id: number;
  total: number;
  current: number;
  color: string;
  type?: string;
  size?: number;
}

@Component({
  selector: 'kd-additional-line-chart',
  templateUrl: './additional-line-chart.component.html',
  styleUrls: ['./additional-line-chart.component.scss'],
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
    trigger('animateClick', [
      transition(
        'initial=>clicked',
        animate(
          '1s',
          keyframes([
            style({ opacity: 0.3 }),
            style({ opacity: 1 }),
            style({ opacity: 0.3 }),
            style({ opacity: 1 }),
          ])
        )
      ),
    ]),
  ],
})
export class AdditionalLineChartComponent implements OnInit, OnDestroy {
  @Input()
  private set params(value: LineChartInputParams) {
    this.inputParams = value;
  }

  public inputParams: LineChartInputParams;
  public currentState = 'initial';
  public clickedState = 'initial';
  public stopValue = '0';

  private subscription: Subscription;

  constructor(
    private ref: ChangeDetectorRef,
    private pieChartService: PieChartService
  ) {
    ref.detach();
  }

  public onClickEventDone() {
    this.clickedState = 'initial';
    this.ref.detectChanges();
  }

  ngOnInit() {
    this.stopValue = (
      this.inputParams.current / (this.inputParams.total / 100) || 0
    ).toString();
    this.currentState = 'final';
    this.ref.detectChanges();

    this.subscription = this.pieChartService.getState.subscribe(el => {
      if (el === this.inputParams.id) {
        this.clickedState = 'clicked';
        this.ref.detectChanges();
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
