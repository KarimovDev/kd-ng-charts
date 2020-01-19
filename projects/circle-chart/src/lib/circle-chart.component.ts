import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { CircleChartInputParams } from './circle-chart.models';
import { KbToSizeNumbersPipe } from './kb-to-size-numbers.pipe';

@Component({
  selector: 'kd-circle-chart',
  templateUrl: './circle-chart.component.html',
  styleUrls: ['./circle-chart.component.scss'],
  animations: [
    trigger('animateFilling', [
      state(
        'final',
        style({
          'stroke-dasharray': '{{stopValue}} 100',
        }),
        {
          params: {
            stopValue: '100',
          },
        }
      ),
      transition('*=>final', animate('1s ease-out')),
    ]),
  ],
})
export class CircleChartComponent implements OnInit {
  @ViewChild('text', { static: false })
  private text: ElementRef;

  @Input()
  private set params(value: CircleChartInputParams) {
    this.inputParams = value;
    this.ref.detectChanges();
  }

  public inputParams: CircleChartInputParams;
  public currentState = 'initial';
  public stopValue = '100';

  constructor(
    private ref: ChangeDetectorRef,
    private kbToSizeNumbersPipe: KbToSizeNumbersPipe
  ) {
    ref.detach();
  }

  ngOnInit() {
    this.stopValue = (
      this.inputParams.current / (this.inputParams.total / 100) || 100
    ).toString();
    this.currentState = 'final';
    this.ref.detectChanges();

    const size = parseFloat(
      this.kbToSizeNumbersPipe.transform(this.inputParams.current)
    );
    const animationDuration = 1000;
    const animationFrequency = 30;
    const animationDurationDelay = 100;
    const increment = size / (animationDuration / animationFrequency);
    let currentSize = 0;
    const intervalFunc = setInterval(() => {
      if (!currentSize) {
        this.text.nativeElement.innerHTML = '0.00';
        currentSize = currentSize + increment;
      } else if (currentSize < size && !(currentSize + increment >= size)) {
        currentSize = currentSize + increment;
        this.text.nativeElement.innerHTML = currentSize.toFixed(2).toString();
      } else if (currentSize < size && currentSize + increment >= size) {
        this.text.nativeElement.innerHTML = size.toFixed(2).toString();
        clearInterval(intervalFunc);
      } else if (currentSize >= size) {
        clearInterval(intervalFunc);
        this.text.nativeElement.innerHTML = size.toFixed(2).toString();
      }
    }, (animationDuration - animationDurationDelay) / (animationDuration / animationFrequency));
  }
}
