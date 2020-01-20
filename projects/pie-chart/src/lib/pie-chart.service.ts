import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class PieChartService {
  private lineChartsState = new Subject<number>();

  public set setState(state) {
    this.lineChartsState.next(state);
  }

  public get getState() {
    return this.lineChartsState.asObservable();
  }
}
