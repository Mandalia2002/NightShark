import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PesoService {
  private http = inject(HttpClient)
  
  enviar() {
    const a = this.http.get('http://localhost:3000/weight',).subscribe();
    return a
  }

  constructor() { }
}
