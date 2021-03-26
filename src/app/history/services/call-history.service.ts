import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Status } from 'src/app/offer/offer';
import { environment } from 'src/environments/environment.prod';
import { CallHistory } from '../callHistory';

export interface HttpCallsHistoryResponse {
  status?: Status,
  data?: CallHistory[]
}

@Injectable({
  providedIn: 'root'
})
export class CallHistoryService {

  constructor(
    private http: HttpClient,
    private auth : AuthService
  ) { }

  getHeader() {
    return {
      "Content-Type": "application/json; charset=utf-8",
      'Accept': 'application/json',
      "Authorization" : `Bearer ${localStorage.getItem(this.auth.AUTH_KEY)}`
    };
  }

  findAll() : Observable<HttpCallsHistoryResponse> {
    console.log(`Token ${localStorage.getItem(this.auth.AUTH_KEY)}`);
    return this.http
      .get<HttpCallsHistoryResponse>(`${environment.url}/customers/callshistory`, { headers : this.getHeader() });
  }
}
