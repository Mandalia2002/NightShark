import { ChangeDetectionStrategy, Component, inject, OnInit, ViewChild } from '@angular/core';
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
  ApexTooltip,
  ApexResponsive
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
  responsive: ApexResponsive | any;
};

@Component({
  selector: 'app-night',
  imports: [
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    ChartComponent
  ],
  templateUrl: './night.component.html',
  styleUrl: './night.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NightComponent implements OnInit{
  private noche = inject(PesoService)
  private readonly _formBuilder = inject(FormBuilder);
  readonly night = this._formBuilder.group({
    cleanDesk: false,
    skinNigh: false,
    teethNigh: false,
    hair: false,
    read: false,
    prepare: false,
    clothes: false
  })

  @ViewChild("chart")
  chart!: ChartComponent;
  chartOptions!: Partial<ChartOptions>;

  b: any

    actualizar() {
    const a = this.night.getRawValue()
    const jsonTrabajado = {
      "cleanDesk": {
        "value": a.cleanDesk
      },
      "skinNigh": {
        "value": a.skinNigh
      },
      "teethNigh": {
        "value": a.teethNigh
      },
      "hair": {
        "value": a.hair
      },
      "read": {
        "value": a.read
      },
      "prepare":{
        "value": a.prepare
      },
      "clothes":{
        "value": a.clothes
      }
    }
    const c = this.noche.patchNight(jsonTrabajado).subscribe()
    return c
  }

  ngOnInit() {
    this.noche.getNight().subscribe((data: any) => {
      const morning = data.percentage;
      this.b = Math.round(Number(morning) * 100)

      this.chartOptions = {
        series: [this.b],
        chart: {
          height: 350,
          type: "radialBar",
          toolbar: {
            show: false
          }
        },
                responsive: [{
          breakpoint: 504,
          options: {
            chart: {
              height: 200
            },
          plotOptions: {
            radialBar: {
              dataLabels: {
                value: {
                  fontSize: "22px"
                }
              }
            }
          }
        }
        }],
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
}
