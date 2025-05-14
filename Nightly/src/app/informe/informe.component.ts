import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-informe',
  imports: [
    CommonModule
  ],
  templateUrl: './informe.component.html',
  styleUrl: './informe.component.css'
})
export class InformeComponent {
  peso1 = 40;
  peso2 = 70;
  peso3 = 10;
}
