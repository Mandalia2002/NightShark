import { Component, inject } from '@angular/core';
import { PesoService } from '../peso.service';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  providers: [PesoService]
})
export class InicioComponent {
  private day = inject(PesoService)
  info = this.day.startDay()

  

   constructor() {
    this.info.subscribe((data: any) => {
    });
  }
}
