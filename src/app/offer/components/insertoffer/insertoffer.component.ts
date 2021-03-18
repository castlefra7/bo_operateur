import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Amount, Offer } from '../../offer';
import { OfferService, OfferType } from '../../services/offer.service';

@Component({
  selector: 'app-insertoffer',
  templateUrl: './insertoffer.component.html',
  styleUrls: ['./insertoffer.component.scss']
})
export class InsertofferComponent implements OnInit {
  myForm: FormGroup;
  amountForm: FormGroup;
  allOfferTypes: OfferType[];

  addedAmounts : Amount[] = [];

  constructor(public fb: FormBuilder, public offerService: OfferService) {
    this.allOfferTypes = offerService.getAllOfferTypes();
    this.myForm = fb.group(
      {
        'name': [''],
        'date': [new Date()],
        'validityDay': [0],
        'price': [0],
        'buyingLimit': [0],
        'durationInDays': [0],
      }
    );
    this.amountForm = fb.group({
      'appName' : [''],
      'value' : [],
      'unitName' : [''],
      'intra' : [],
      'extra' : []
    });
  }

  ngOnInit(): void {
    this.allOfferTypes = this.offerService.getAllOfferTypes();
  }

  onSubmit(): void {
    const value = this.myForm.value;
    const newOffer : Offer = {
      id: 1,
      createdAt : Date.now().toString(),
      name : value.name,
      amounts : this.addedAmounts,
      valididtyDay : value.validityDay,
      limitation : {
        buyingLimit : value.buyingLimit,
        durationInDays: value.durationInDays
      }
    };
    console.log(newOffer);
    this.offerService.insert(newOffer).subscribe(data => console.log(data));
  }
  
  onAmountsSub() : void {
    const value = this.amountForm.value;
    const newAmount : Amount = {
      application : {
        id : 1,
        name : value.appName,
        unit : {
          id: 1,
          suffix : value.unitName,
        }
      },
      value : value.value,
    };
    console.log(newAmount);
    this.addedAmounts.push(newAmount);
  }
}
