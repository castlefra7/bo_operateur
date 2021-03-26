import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpRespOffer, Offer } from '../offer';

export class OfferType {
  id: Number;
  name: String;

  constructor(_id: Number, _name: String) {
    this.id = _id;
    this.name = _name;
  }
}

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient) { }

  findAll() : Observable<HttpRespOffer> {
    console.log("url : " + environment.url);
    return this.http.get(`${environment.url}/offers`);
  }

  insert(newOffer: Offer): Observable<HttpRespOffer> {
    const options = {
      headers : {
        "Content-Type": "application/json"
      }
    };
    return this.http.post(`${environment.url}/offers`, newOffer, options);
  }

  getAllOfferTypes() {
    var result = [];
    result.push(new OfferType(1, "internet"));
    result.push(new OfferType(2, "message"));
    return result;
  }
}
