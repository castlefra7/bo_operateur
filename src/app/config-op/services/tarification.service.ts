import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Status } from 'src/app/offer/offer';
import { environment } from 'src/environments/environment.prod';
import { FraisMobileMoney, TarifAppel, TarifInternet, TarifMessage } from '../tarif';

export interface HttpCallsPricingResponse {
  status?: Status,
  data?: TarifAppel
}

export interface HttpMessagesPricingResponse {
  status?: Status,
  data?: TarifMessage
}

export interface HttpInternetPricingResponse {
  status?: Status,
  data?: TarifInternet
}

export interface HttpMobileMoneyFeesResponse {
  status?: Status,
  data?: FraisMobileMoney
}

@Injectable({
  providedIn: 'root'
})
export class TarificationService {

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

  changeTarifAppels(newTarif: TarifAppel) : Observable<HttpCallsPricingResponse> {
    return this.http.post<HttpCallsPricingResponse>(`${environment.url}/pricings/calls`, newTarif, { headers : this.getHeader() });
  }

  changeTarifMessage(newTarif: TarifMessage) : Observable<HttpMessagesPricingResponse> {
    return this.http.post<HttpMessagesPricingResponse>(`${environment.url}/pricings/messages`, newTarif, { headers : this.getHeader() });
  }

  changeTarifInternet(newTarif: TarifInternet) : Observable<HttpInternetPricingResponse> {
    return this.http.post<HttpInternetPricingResponse>(`${environment.url}/pricings/internet`, newTarif, { headers : this.getHeader() });
  }

  changeFraisMobileMoney(newTarif: FraisMobileMoney) : Observable<HttpMobileMoneyFeesResponse> {
    return this.http.post<HttpMobileMoneyFeesResponse>(`${environment.url}/mobilemoney/fees`, newTarif, { headers : this.getHeader() });
  }
}
