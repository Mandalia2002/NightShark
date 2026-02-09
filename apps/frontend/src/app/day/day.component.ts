import { Component, ChangeDetectionStrategy, inject, ViewChild } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  xaxis: ApexXAxis | any;
  fill: ApexFill | any;
  tooltip: ApexTooltip | any;
  stroke: ApexStroke | any;
  legend: ApexLegend | any;
};

@Component({
  selector: 'app-day',
  imports: [
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    ChartComponent
  ],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DayComponent {
  private readonly _formBuilder = inject(FormBuilder);
  readonly day = this._formBuilder.group({
    exercise: false,
    dailies: false,
    food: false,
    work: false,
    water: false,
    study: false
  })

  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [70],
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '70%',
          }
        },
      }
    }
  }
}