import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OfferService, OfferType } from '../../services/offer.service';

@Component({
  selector: 'app-insertoffer',
  templateUrl: './insertoffer.component.html',
  styleUrls: ['./insertoffer.component.scss']
})
export class InsertofferComponent implements OnInit {
  myForm: FormGroup;
  allOfferTypes: OfferType[];

  constructor(public fb: FormBuilder, public offerService: OfferService) {
    this.allOfferTypes = [];
    this.myForm = fb.group(
      {
        'name': [''],
        'date': [new Date()],
        'duration': [0],
        'price': [0]
      }
    )
  }

  ngOnInit(): void {
    this.allOfferTypes = this.offerService.getAllOfferTypes();
  }

  onSubmit(value: any): void {
    console.log(value);
  }

}
