import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesoService } from '../peso.service';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-peso',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './peso.component.html',
  styleUrl: './peso.component.css',
  providers: [PesoService]
})
export class PesoComponent implements OnInit{
  private weight = inject(PesoService)

  info = this.weight.getWeight()

  peso: any;
  pesoactual: any;
  pesofaltante: any;
  diasfaltantes: any;
  pesoPos:number = 0.00;

  ngOnInit() {}

  actualizacion(){
    console.log(this.pesoPos)
    const act = this.weight.postWeight(this.pesoPos)
    return act.subscribe((data: any)=>{})
  }

  constructor() {
    this.info.subscribe((data: any) => {
      this.peso = data.weight;
      this.pesoactual = data.weight
      this.pesofaltante = data.weight_left
      this.diasfaltantes = data.days_left
    });
  }
}
