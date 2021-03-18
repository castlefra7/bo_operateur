import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(
    public fb: FormBuilder, 
    public offerService: OfferService,
    public router: Router 
    ) {
    this.allOfferTypes = offerService.getAllOfferTypes();
    this.myForm = fb.group(
      {
        'name': ['', Validators.required],
        'date': [new Date()],
        'validityDay': [0, Validators.required],
        'price': [0, Validators.required],
        'buyingLimit': [0, Validators.required],
        'durationInDays': [0, Validators.required],
        'priority': [0, Validators.required]
      }
    );
    this.amountForm = fb.group({
      'appName' : ['', Validators.required],
      'value' : [null, Validators.required],
      'unitName' : ['', Validators.required],
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
      price : value.price,
      validityDay : value.validityDay,
      priority : value.priority,
      limitation : {
        buyingLimit : value.buyingLimit,
        durationInDays: value.durationInDays
      }
    };
    console.log(newOffer);
    this.offerService.insert(newOffer).subscribe(data => console.log(data));
    this.router.navigateByUrl('offers');
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
