import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-peso',
  imports: [
    CommonModule,
  ],
  templateUrl: './peso.component.html',
  styleUrl: './peso.component.css'
})
export class PesoComponent {
peso=50;
}
