import { Injectable } from '@angular/core';

export class OfferType {
  id: Number;
  name: String;

  constructor(_id: Number, _name: String) {
    this.id = _id;
    this.name = _name;
  }
}

export interface Offer {
  id: Number;
  name: String;
}

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor() { }

  getAllOfferTypes() {
    var result = [];
    result.push(new OfferType(1, "internet"));
    result.push(new OfferType(2, "message"));
    return result;
  }
}
