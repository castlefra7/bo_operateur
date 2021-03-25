import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Status } from 'src/app/offer/offer';
import { ChartValues, Statistique } from '../statistique';

export interface HttpStatsResponse {
  status?: Status,
  data?: Statistique[]
}

export interface HttpStatsResponseChart {
  status?: Status,
  data?: ChartValues[]
}

@Injectable({
  providedIn: 'root'
})
export class StatService {

  readonly url = "http://localhost:8080";

  constructor(
    private http: HttpClient,
    private auth : AuthService
  ) { }

  getHeader() {
    return {
      "Content-Type": "application/json; charset=utf-8",
      'Accept': 'application/json',
      "Authorization" : `Bearer ${localStorage.getItem(this.auth.ADMIN_AUTH_KEY)}`
    };
  }

  findAll(date : string) : Observable<HttpStatsResponse> {
    return this.http
      .get<HttpStatsResponse>(`${this.url}/stats?date=${date}`, { headers : this.getHeader() });
  }

  dailyMobileMoneyOps(): Observable<HttpStatsResponseChart> {
    return this.http.get<HttpStatsResponseChart>(`${this.url}/stats/mobileops`, {headers: this.getHeader()});
  }
}
