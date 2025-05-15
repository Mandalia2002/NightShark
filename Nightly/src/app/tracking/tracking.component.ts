import { Component, NgModule, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tracking',
  imports: [
    MatCheckboxModule,
    NgbProgressbarModule,
    CommonModule,
  ],
  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.css',
})

export class TrackingComponent implements AfterViewInit{
  progLuz = 10;
  progDia = 30;
  progNoc = 80;
  
  proa = 40;

  graf1 = false;
  graf2 = false;
  graf3 = false;

  @ViewChild('dropdownCollapseRef1') dropdownCollapseRef1!: ElementRef;
  @ViewChild('dropdownCollapseRef2') dropdownCollapseRef2!: ElementRef;
  @ViewChild('dropdownCollapseRef3') dropdownCollapseRef3!: ElementRef;

  ngAfterViewInit() {
    const el1 = this.dropdownCollapseRef1.nativeElement;
    const el2 = this.dropdownCollapseRef2.nativeElement;
    const el3 = this.dropdownCollapseRef3.nativeElement;

    el1.addEventListener('show.bs.collapse', () =>{
      this.graf1 = true;
    })

    el1.addEventListener('hide.bs.collapse', ()=>{
      this.graf1 = false;
    })

    el2.addEventListener('show.bs.collapse', () =>{
      this.graf2 = true;
    })

    el2.addEventListener('hide.bs.collapse', ()=>{
      this.graf2 = false;
    })
    
    el3.addEventListener('show.bs.collapse', () =>{
      this.graf3 = true;
    })

    el3.addEventListener('hide.bs.collapse', ()=>{
      this.graf3 = false;
    })
  }

   



  // private readonly _formBuilder = inject(FormBuilder);

  // readonly amanecerS = this._formBuilder.group({
  //   Hora: 1,
  //   Cama: 1,
  //   Escritorio: 1,
  //   Dientes: 1,
  //   Cara: 1,
  //   Cuerpo: 1
  // });
}
