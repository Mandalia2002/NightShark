import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PesoService {
  private http = inject(HttpClient)


  //Weight
  getWeight(): Observable<any> {
    const a = this.http.get('http://localhost:3000/api/weight').pipe((res) => res)
    return a
  }

  postWeight(peso: number): Observable<any> {
    const a = this.http.post('http://localhost:3000/api/weight', {
      "weight": peso
    }).pipe((res) => res)
    return a
  }

  //Daily
  startDay(): Observable<any> {
    const a = this.http.post('http://localhost:3000/api/daily', '').pipe((res) => res)
    return a
  }

  //Morning
  getMorning(): Observable<any> {
    const a = this.http.get('http://localhost:3000/api/morning/present').pipe((res) => res)
    return a
  }

  patchMorning(info: any): Observable<any> {
    const a = this.http.patch('http://localhost:3000/api/morning', info).pipe((res) => res)
    return a
  }

  //Day
  getDay(): Observable<any> {
    const a = this.http.get('http://localhost:3000/api/day/present').pipe((res) => res)
    return a
  }

  patchDay(info: any): Observable<any> {
    const a = this.http.patch('http://localhost:3000/api/day', info).pipe((res) => res)
    return a
  }

  //Night
  getNight(): Observable<any> {
    const a = this.http.get('http://localhost:3000/api/night/present').pipe((res) => res)
    return a
  }

  patchNight(info: any): Observable<any> {
    const a = this.http.patch('http://localhost:3000/api/night', info).pipe((res) => res)
    return a
  }

  constructor() { }
}
