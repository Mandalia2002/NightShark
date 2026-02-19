import { ChangeDetectionStrategy, Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  selector: 'app-morning',
  imports: [
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    ChartComponent
  ],
  templateUrl: './morning.component.html',
  styleUrl: './morning.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PesoService]
})
export class MorningComponent implements OnInit {
  private readonly morning = inject(PesoService)
  private readonly _formBuilder = inject(FormBuilder);
  readonly test = this._formBuilder.group({
    wakeUp: false,
    bed: false,
    clean: false,
    teethMorn: false,
    skinMorn: false,
    body: false
  })

  b: any

  @ViewChild("chart")
  chart!: ChartComponent;
  chartOptions!: Partial<ChartOptions>;

  actualizar() {
    const a = this.test.getRawValue()
    const jsonTrabajado = {
      "wakeUp": {
        "value": a.wakeUp
      },
      "bed": {
        "value": a.bed
      },
      "clean": {
        "value": a.teethMorn
      },
      "skinMorn": {
        "value": a.skinMorn
      },
      "body": {
        "value": a.body
      },
      "teethMorn": {
        "value": a.teethMorn
      }
    }
    const c = this.morning.patchMorning(jsonTrabajado).subscribe()
    return c
  }



  ngOnInit() {
    this.morning.getMorning().subscribe((data: any) => {
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
