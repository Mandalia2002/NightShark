import { Component, inject, OnInit, ViewChild } from '@angular/core';
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
export class PesoComponent implements OnInit {
  private readonly weight = inject(PesoService)

  peso: any;
  pesoactual: any;
  pesofaltante: any;
  diasfaltantes: any;
  diasTranscurridos: any;
  fechaMeta: any;
  fechaCreacion: any;
  diasTrabajados: any;
  pesoMeta: any;

  pesoPos: number = 0.00;
  pesoMetaAct: any;
  fechaMetaAct: any;
  newDate: any;
  newWeight: number = 0;

  ngOnInit() {
    this.weight.getWeight().subscribe((data: any) => {
      this.peso = Number(data.weight);
      this.pesoactual = data.weight
      this.pesofaltante = data.weight_left
      this.fechaMeta = data.date_goal
      this.diasTrabajados = data.worked_days
      this.fechaCreacion = data.created_at
      this.pesoMeta = data.goal_weight

      console.log(this.peso)
      const a = new Date();
      const b = new Date(this.fechaMeta)
      const c = new Date(this.fechaCreacion)
      const days = Math.abs(b.getTime() - a.getTime())
      const differenceInDays = Math.ceil(days / 86400000);
      const days2 = Math.abs(c.getTime() - a.getTime())
      const daysPassed = Math.ceil(days2 / 86400000);
      this.diasfaltantes = differenceInDays
      this.diasTranscurridos = daysPassed
    });
  }

  actualizacion() {
    const a = {
      weight: this.pesoPos
    }
    const act = this.weight.patchWeight(a)
    return act.subscribe((data: any) => { })
  }

  actualizarDatos() {
    const res = {
      goal_weight: this.pesoMetaAct,
      date_goal: this.fechaMetaAct
    }
    const act = this.weight.putWeight(res)
    return act.subscribe((data: any) => { })
  }

  nuevaMeta() {
    const res = {
      goal_weight: this.newWeight,
      date_goal: this.newDate,
      weight: 0.00
    }
    console.log(res)
    const act = this.weight.newWeight(res)
    return act.subscribe((data: any) => { })
  }

  abrirPeso() {
    const formModal = document.getElementById('form-modal') as HTMLDialogElement;
    formModal?.showModal();
  }

  close1() {
    const formModal = document.getElementById('form-modal') as HTMLDialogElement;
    formModal?.close();
  }

  abrirFecha() {
    const formModal = document.getElementById('form-modal2') as HTMLDialogElement;
    formModal?.showModal();
  }

  close2() {
    const formModal = document.getElementById('form-modal2') as HTMLDialogElement;
    formModal?.close();
  }

  reinicio() {
    const formModal = document.getElementById('form-modal3') as HTMLDialogElement;
    formModal?.showModal();
  }

  close3() {
    const formModal = document.getElementById('form-modal3') as HTMLDialogElement;
    formModal?.close();
  }
}
