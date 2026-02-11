import { Component, inject, OnInit } from '@angular/core';
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
  private weight = inject(PesoService)

  info = this.weight.getWeight()

  peso: any;
  pesoactual: any;
  pesofaltante: any;
  diasfaltantes: any;
  diasTranscurridos: any;
  fechaMeta: any;
  fechaCreacion: any;
  diasTrabajados: any;

  pesoPos: number = 0.00;
  pesoMetaAct: any;
  fechaMetaAct: any;
  newDate: any;
  newWeight: any;

  ngOnInit() {
    this.info.subscribe((data: any) => {
      this.peso = data.weight;
      this.pesoactual = data.weight
      this.pesofaltante = data.weight_left
      this.fechaMeta = data.date_goal
      this.diasTrabajados = data.worked_days
      this.fechaCreacion = data.created_at

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
    const act = this.weight.patchWeight(this.pesoPos)
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
      goal_weight: this.pesoMetaAct,
      date_goal: this.fechaMetaAct,
      weight: 0.00
    }
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
