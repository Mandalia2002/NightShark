import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClient } from '@angular/common/http';
import { FormsModule, FormBuilder, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-day',
  imports: [
    MatCheckboxModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DayComponent {
  private readonly _formBuilder = inject(FormBuilder);
  readonly day = this._formBuilder.group({
    exercise: false,
    dailies: false,
    food: false,
    work: false,
    water: false,
    study:false
  })

  enviar(valor2: string) {
    console.log(valor2);
    // this.HttpClient.post('http://localhost:3000/api/estado', {valor: valor2}).subscribe(arg => this.property = arg);

  }

}