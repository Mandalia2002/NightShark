import { Component, inject  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesoService } from '../peso.service';

@Component({
  selector: 'app-peso',
  imports: [
    CommonModule
  ],
  templateUrl: './peso.component.html',
  styleUrl: './peso.component.css',
  providers: [PesoService]
})
export class PesoComponent {
  private weight = inject(PesoService)

  info = this.weight.getWeight()

  peso: any;
  pesoactual: any;
  pesofaltante: any;
  diasfaltantes: any;

  constructor() {
    this.info.subscribe((data: any) => {
      this.peso = data.weight;
      this.pesoactual = data.weight
      this.pesofaltante = data.weight_left
      this.diasfaltantes = data.days_left
    });
  }
}
