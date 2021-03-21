import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Unit } from '../offer';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  units : Unit[] = [
    { id : 1, suffix : "Mn" },
    { id : 1, suffix : "SMS" },
    { id : 1, suffix : "Ko" },
    { id : 1, suffix : "Mo" },
    { id : 1, suffix : "Go" }
  ];

  constructor() { }

  findAll() : Observable<Unit[]> {
    return of(this.units);
  }
}
