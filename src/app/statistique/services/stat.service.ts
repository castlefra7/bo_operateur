import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Status } from 'src/app/offer/offer';
import { environment } from 'src/environments/environment.prod';
import { Statistique } from '../statistique';

export interface HttpStatsResponse {
  status?: Status,
  data?: Statistique[]
}

@Injectable({
  providedIn: 'root'
})
export class StatService {

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
      .get<HttpStatsResponse>(`${environment.url}/stats?date=${date}`, { headers : this.getHeader() });
  }
}
