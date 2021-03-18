import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  url : string = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  findAll() : Observable<HttpRespOffer> {
    return this.http.get(`${this.url}/offers`);
  }

  insert(newOffer: Offer): Observable<HttpRespOffer> {
    const options = {
      headers : {
        "Content-Type": "application/json"
      }
    };
    return this.http.post(`${this.url}/offers`, newOffer, options);
  }

  getAllOfferTypes() {
    var result = [];
    result.push(new OfferType(1, "internet"));
    result.push(new OfferType(2, "message"));
    return result;
  }
}
