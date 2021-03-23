import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FraisMobileMoney, TarifAppel, TarifInternet, TarifMessage } from '../tarif';

@Injectable({
  providedIn: 'root'
})
export class TarificationService {

  readonly url : string = "http://localhost:8080";

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

  changeTarifAppels(newTarif: TarifAppel) {
    return this.http.post(`${this.url}/pricings/calls`, newTarif, { headers : this.getHeader() });
  }

  changeTarifMessage(newTarif: TarifMessage) {
    return this.http.post(`${this.url}/pricings/messages`, newTarif, { headers : this.getHeader() });
  }

  changeTarifInternet(newTarif: TarifInternet) {
    return this.http.post(`${this.url}/pricings/internet`, newTarif, { headers : this.getHeader() });
  }

  changeFraisMobileMoney(newTarif: FraisMobileMoney) {
    return this.http.post(`${this.url}/mobilemoney/fees`, newTarif, { headers : this.getHeader() });
  }
}
