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
    const a = this.http.get(`https://night-shark.vercel.app/api/weight`).pipe((res) => res)
    return a
  }

  postWeight(peso: number): Observable<any> {
    const a = this.http.post('https://night-shark.vercel.app/api/weight', {
      "weight": peso
    }).pipe((res) => res)
    return a
  }

  newWeight(peso: any): Observable<any> {
    const a = this.http.post('https://night-shark.vercel.app/api/weight/new', peso).pipe((res) => res)
    return a
  }

  patchWeight(peso: any): Observable<any> {
    const a = this.http.patch('https://night-shark.vercel.app/api/weight', peso).pipe((res) => res)
    return a
  }

  putWeight(peso: any): Observable<any> {
    const a = this.http.put('https://night-shark.vercel.app/api/weight', peso).pipe((res) => res)
    return a
  }

  //Daily
  startDay(): Observable<any> {
    const a = this.http.post('https://night-shark.vercel.app/api/daily', '').pipe((res) => res)
    return a
  }

  updateMood(mood: any): Observable<any> {
    const a = this.http.patch('https://night-shark.vercel.app/api/daily', mood).pipe((res) => res)
    return a
  }

  //Morning
  getMorning(): Observable<any> {
    const a = this.http.get('https://night-shark.vercel.app/api/morning/present').pipe((res) => res)
    return a
  }

  patchMorning(info: any): Observable<any> {
    const a = this.http.patch('https://night-shark.vercel.app/api/morning', info).pipe((res) => res)
    return a
  }

  //Day
  getDay(): Observable<any> {
    const a = this.http.get('https://night-shark.vercel.app/api/day/present').pipe((res) => res)
    return a
  }

  patchDay(info: any): Observable<any> {
    const a = this.http.patch('https://night-shark.vercel.app/api/day', info).pipe((res) => res)
    return a
  }

  //Night
  getNight(): Observable<any> {
    const a = this.http.get('https://night-shark.vercel.app/api/night/present').pipe((res) => res)
    return a
  }

  patchNight(info: any): Observable<any> {
    const a = this.http.patch('https://night-shark.vercel.app/api/night', info).pipe((res) => res)
    return a
  }

  //Records
  getMonth(): Observable<any> {
    const a = this.http.get('https://night-shark.vercel.app/api/records/month').pipe((res) => res)
    return a
  }

  getYear(): Observable<any> {
    const a = this.http.get('https://night-shark.vercel.app/api/records/year').pipe((res) => res)
    return a
  }

  newMonth(): Observable<any> {
    const a = this.http.post('https://night-shark.vercel.app/api/records/month', '').pipe((res) => res)
    return a
  }

  newYear(): Observable<any> {
    const a = this.http.post('https://night-shark.vercel.app/api/records/year', '').pipe((res) => res)
    return a
  }

  constructor() { }
}
