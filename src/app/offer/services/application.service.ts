import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRespApp } from '../offer';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  url : string = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  findAll() : Observable<HttpRespApp> {
    return this.http.get<HttpRespApp>(`${this.url}/apps`);
  }
}
