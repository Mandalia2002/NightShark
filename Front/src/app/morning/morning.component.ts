import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-morning',
  imports: [
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './morning.component.html',
  styleUrl: './morning.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MorningComponent {
  private readonly _formBuilder = inject(FormBuilder);
  readonly test = this._formBuilder.group({
    wakeUp: false,
    bed: false,
    clean: false,
    teethMorn: false,
    skinMorn: false,
    body: false
  })
}
