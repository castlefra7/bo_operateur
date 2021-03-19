import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FraisMobileMoney, TarifAppel, TarifInternet, TarifMessage } from '../tarif';

@Injectable({
  providedIn: 'root'
})
export class TarificationService {

  readonly url : string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  changeTarifAppels(newTarif: TarifAppel) {
    const options = {
      headers : {
        "Content-Type": "application/json"
      }
    };
    return this.http.post(`${this.url}/pricings/calls`, newTarif, options);
  }

  changeTarifMessage(newTarif: TarifMessage) {
    const options = {
      headers : {
        "Content-Type": "application/json"
      }
    };
    return this.http.post(`${this.url}/pricings/messages`, newTarif, options);
  }

  changeTarifInternet(newTarif: TarifInternet) {
    const options = {
      headers : {
        "Content-Type": "application/json"
      }
    };
    return this.http.post(`${this.url}/pricings/internet`, newTarif, options);
  }

  changeFraisMobileMoney(newTarif: FraisMobileMoney) {
    const options = {
      headers : {
        "Content-Type": "application/json"
      }
    };
    return this.http.post(`${this.url}/mobilemoney/fees`, newTarif, options);
  }
}
