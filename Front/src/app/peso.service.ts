import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PesoService {
  private http = inject(HttpClient)

  getWeight(): Observable<any> {
    const a = this.http.get('http://localhost:3000/api/weight').pipe((res) => res)
    return a
  }

  startDay(): Observable<any> {
    const a = this.http.post('http://localhost:3000/api/daily', '').pipe((res) => res)
    return a
  }

  getMorning(): Observable<any> {
    const a = this.http.get('http://localhost:3000/api/morning/present').pipe((res) => res)
    return a
  }

  constructor() { }
}
