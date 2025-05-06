import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-tracking',
  imports: [
    MatProgressBarModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    MatCheckboxModule
  ],
  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.css'
})
export class TrackingComponent {
  private readonly _formBuilder = inject(FormBuilder);

  readonly amanecerS = this._formBuilder.group({
    Hora: false,
    Cama: false,
    Escritorio: false,
    Dientes: false,
    Cara: false,
    Cuerpo: false
  });
}
