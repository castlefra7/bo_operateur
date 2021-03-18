import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Deposit {
  created_at: string;
  amount: Number;
  phone_number: string;
  name: string;
  id: Number;
}

export interface HttpResponse {
  status?: Status,
  data?: Deposit[]
}

export interface Status {
  code?: number,
  message?: string
}

@Injectable({
  providedIn: 'root'
})
export class MobileMoneyService {
  url : string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  allDeposits(): Observable<HttpResponse> {
    return this.http.get(`${this.url}/pos/deposits`);
  }

  validateDeposit(id: Number): Observable<HttpResponse> {
    const headers = {"Content-Type": "application/json"};
    return this.http.put(`${this.url}/pos/validate/${id}`, headers)
  }
}
