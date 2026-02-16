import { Component, inject, OnInit, ViewChild } from '@angular/core';
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
import { PesoService } from '../peso.service';

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
  selector: 'app-informe',
  imports: [ChartComponent],
  templateUrl: './informe.component.html',
  providers: [PesoService],
  styleUrl: './informe.component.css'
})
export class InformeComponent implements OnInit {
  private readonly info = inject(PesoService)

  @ViewChild("chart")
  chart!: ChartComponent;
  chartOptions!: Partial<ChartOptions>;

    @ViewChild("chart")
  chart2!: ChartComponent;
  chartOptions2!: Partial<ChartOptions>;

  habitsMorning: any;
  habitsDay: any;
  habitsNight: any;
  mood_statistics: any;

  percentage: number = 0;

  YearhabitsMorning: any;
  YearhabitsDay: any;
  YearhabitsNight: any;
  Yearmood_statistics: any;

  Yearpercentage: number = 0;


  ngOnInit() {
    this.info.getMonth().subscribe((data) => {
      const a = JSON.stringify(data.habits_improve)
      const b = JSON.parse(a)
      console.log(b)
      this.habitsMorning = Object.getOwnPropertyNames(b.morning)
      this.habitsDay = Object.getOwnPropertyNames(b.day)
      this.habitsNight = Object.getOwnPropertyNames(b.night)
      this.mood_statistics = Object.getOwnPropertyNames(data.mood_statistics)
      this.percentage = Math.round(data.percentages)
      this.chartOptions = {
        series: [this.percentage],
        chart: {
          height: 250,
          type: "radialBar",
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: "70%",
              background: "#ffffff00",
              image: undefined,
              position: "front",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: "#4a3f5f",
              strokeWidth: "67%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.15
              }
            },

            dataLabels: {
              show: true,
              name: {
                show: false
              },
              value: {
                show: true,
                fontSize: "40px",
                color: "#9f75cf"
              }
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#7853b4"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: "round"
        }
      };
    })

    this.info.getYear().subscribe((data) => {
      const a = JSON.stringify(data.habits_improve)
      const b = JSON.parse(a)
      console.log(b)
      this.YearhabitsMorning = Object.getOwnPropertyNames(b.morning)
      this.YearhabitsDay = Object.getOwnPropertyNames(b.day)
      this.YearhabitsNight = Object.getOwnPropertyNames(b.night)
      this.Yearmood_statistics = Object.getOwnPropertyNames(data.mood_statistics)
      this.Yearpercentage = Math.round(data.percentages)
      this.chartOptions2 = {
        series: [this.Yearpercentage],
        chart: {
          height: 250,
          type: "radialBar",
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: "70%",
              background: "#ffffff00",
              image: undefined,
              position: "front",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: "#4a3f5f",
              strokeWidth: "67%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.15
              }
            },

            dataLabels: {
              show: true,
              name: {
                show: false
              },
              value: {
                show: true,
                fontSize: "40px",
                color: "#9f75cf"
              }
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#7853b4"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: "round"
        }
      };
    })
  }

  monthly() {
    this.info.newMonth().subscribe((data) => { })
  }

  yearly() {
    this.info.newYear().subscribe((data) => { })
  }
}
