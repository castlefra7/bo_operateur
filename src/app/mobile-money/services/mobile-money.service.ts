import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

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

  constructor(private http: HttpClient, private auth: AuthService) { }

  getHeader() {
    return {
      "Content-Type": "application/json; charset=utf-8",
      'Accept': 'application/json',
      "Authorization" : `Bearer ${localStorage.getItem(this.auth.ADMIN_AUTH_KEY)}`
    };
  }

  allDeposits(): Observable<HttpResponse> {
    console.log(localStorage.getItem(this.auth.ADMIN_AUTH_KEY));
    return this.http.get(`${this.url}/pos/deposits`, {headers: this.getHeader()});
  }

  validateDeposit(id: Number): Observable<HttpResponse> {
    const headers = {"Content-Type": "application/json"};
    return this.http.put(`${this.url}/pos/validate/${id}`, headers)
  }
}
