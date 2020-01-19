import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CircleChartModule } from 'circle-chart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { LineChartModule } from 'projects/line-chart/src/public-api';
import { PieChartModule } from 'projects/pie-chart/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CircleChartModule,
    BrowserAnimationsModule,
    MatIconModule,
    LineChartModule,
    PieChartModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
