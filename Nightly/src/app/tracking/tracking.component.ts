import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tracking',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    NgbProgressbarModule,
  ],
  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.css',
})

export class TrackingComponent {
  graf = false;
  ocultar() {
    this.graf = true;
  }

  mostrar() {
    this.graf = false;
  }

  private readonly _formBuilder = inject(FormBuilder);

  readonly amanecerS = this._formBuilder.group({
    Hora: 1,
    Cama: 1,
    Escritorio: 1,
    Dientes: 1,
    Cara: 1,
    Cuerpo: 1
  });
}
