import { Component, ChangeDetectionStrategy, inject, ViewChild, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { PesoService } from '../peso.service';
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
import { interval } from 'rxjs';

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

export class DayComponent implements OnInit{
  private dia = inject(PesoService)
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
  chartOptions!: Partial<ChartOptions>;

  b:any

    actualizar() {
    const a = this.day.getRawValue()
    const jsonTrabajado = {
      "exercise": {
        "value": a.exercise
      },
      "dailies": {
        "value": a.dailies
      },
      "food": {
        "value": a.food
      },
      "work": {
        "value": a.work
      },
      "water": {
        "value": a.water
      },
      "study":{
        "value": a.study
      }
    }
    const c = this.dia.patchDay(jsonTrabajado).subscribe()
    return c
  }

  ngOnInit() {
    let nom
    nom = interval(1500).subscribe(
     (val) => { this.dayData()});
    }

  dayData() {
      this.dia.getDay().subscribe((data: any) => {
      const morning = data.percentage;
      this.b = Math.round(Number(morning)*100)

      this.chartOptions = {
        series: [this.b],
        chart: {
          height: 350,
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
              value:{
                show:true,
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

}