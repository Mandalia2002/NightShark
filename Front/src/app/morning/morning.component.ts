import { ChangeDetectionStrategy, Component, inject, ViewChild } from '@angular/core';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
// import {
//   ApexAxisChartSeries,
//   ApexChart,
//   ChartComponent,
//   ApexDataLabels,
//   ApexPlotOptions,
//   ApexYAxis,
//   ApexLegend,
//   ApexStroke,
//   ApexXAxis,
//   ApexFill,
//   ApexTooltip
// } from "ng-apexcharts";

// export type ChartOptions = {
//   series: ApexAxisChartSeries|any;
//   chart: ApexChart|any;
//   dataLabels: ApexDataLabels|any;
//   plotOptions: ApexPlotOptions|any;
//   yaxis: ApexYAxis|any;
//   xaxis: ApexXAxis|any;
//   fill: ApexFill|any;
//   tooltip: ApexTooltip|any;
//   stroke: ApexStroke|any;
//   legend: ApexLegend|any;
// };

@Component({
  selector: 'app-morning',
  imports: [
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    // ChartComponent
  ],
  templateUrl: './morning.component.html',
  styleUrl: './morning.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MorningComponent {
  private readonly _formBuilder = inject(FormBuilder);
  readonly test = this._formBuilder.group({
    wakeUp: false,
    bed: false,
    clean: false,
    teethMorn: false,
    skinMorn: false,
    body: false
  })

  // @ViewChild("chart")
  // chart!: ChartComponent;
  // public chartOptions: Partial<ChartOptions>;

  // constructor() {
  //   this.chartOptions = {
  //     series: [
  //       {
  //         name: "Net Profit",
  //         data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  //       },
  //       {
  //         name: "Revenue",
  //         data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  //       },
  //       {
  //         name: "Free Cash Flow",
  //         data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  //       }
  //     ],
  //     chart: {
  //       type: "bar",
  //       height: 350
  //     },
  //     plotOptions: {
  //       bar: {
  //         horizontal: false,
  //         columnWidth: "55%",
  //       }
  //     },
  //     dataLabels: {
  //       enabled: false
  //     },
  //     stroke: {
  //       show: true,
  //       width: 2,
  //       colors: ["transparent"]
  //     },
  //     xaxis: {
  //       categories: [
  //         "Feb",
  //         "Mar",
  //         "Apr",
  //         "May",
  //         "Jun",
  //         "Jul",
  //         "Aug",
  //         "Sep",
  //         "Oct"
  //       ]
  //     },
  //     yaxis: {
  //       title: {
  //         text: "$ (thousands)"
  //       }
  //     },
  //     fill: {
  //       opacity: 1
  //     }
  //   };
  // }
}
