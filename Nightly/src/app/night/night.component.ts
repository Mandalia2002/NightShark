import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, FormBuilder, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-night',
  imports: [MatCheckboxModule, FormsModule, ReactiveFormsModule],
  templateUrl: './night.component.html',
  styleUrl: './night.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NightComponent {
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
}
