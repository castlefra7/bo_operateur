import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpRespApp } from '../offer';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient) { }

  findAll() : Observable<HttpRespApp> {
    return this.http.get<HttpRespApp>(`${environment.url}/apps`);
  }
}
