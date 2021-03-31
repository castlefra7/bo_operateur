import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { environment } from 'src/environments/environment.prod';
import { Status } from '../offer';

export interface Pricing {
  created_at : string,
  amount_interior: number,
  amount_exterior : number
}

export interface CallsPricing extends Pricing {}

export interface MessagePricing extends Pricing {
  unit: number
}

export interface InternetPricing {
  created_at : string,
  amount: number
}

export interface HttpCallsPricingResponse {
  status: Status,
  data : CallsPricing[]
}

export interface HttpMessagePricingResponse {
  status: Status,
  data : MessagePricing[]
}

export interface HttpInternetPricingResponse {
  status: Status,
  data : InternetPricing[]
}

@Injectable({
  providedIn: 'root'
})
export class PricingService {

  constructor(
    private http : HttpClient,
    private auth : AuthService
  ) { }

  getHeader() {
    return {
      "Content-Type": "application/json; charset=utf-8",
      'Accept': 'application/json',
      "Authorization" : `Bearer ${localStorage.getItem(this.auth.ADMIN_AUTH_KEY)}`
    };
  }

  findMessagePricing() : Observable<HttpMessagePricingResponse> {
    return this.http.get<HttpMessagePricingResponse>(`${environment.url}/pricings/messages`, { headers: this.getHeader() });
  }

  findCallsPricing() : Observable<HttpCallsPricingResponse> {
    return this.http.get<HttpCallsPricingResponse>(`${environment.url}/pricings/calls/price`, { headers: this.getHeader() });
  }

  findInternetPricing() : Observable<HttpInternetPricingResponse> {
    return this.http.get<HttpInternetPricingResponse>(`${environment.url}/pricings/internet`, { headers: this.getHeader() });
  }
}
