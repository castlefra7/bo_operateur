import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Amount, Application, Offer, Unit } from '../../offer';
import { ApplicationService } from '../../services/application.service';
import { OfferService, OfferType } from '../../services/offer.service';
import { UnitService } from '../../services/unit.service';

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
  applications : Application[] = [];

  units$! : Observable<Unit[]>;

  constructor(
    private fb: FormBuilder, 
    private offerService: OfferService,
    private unitService : UnitService,
    private appService : ApplicationService,
    private router: Router 
    ) {
    this.allOfferTypes = offerService.getAllOfferTypes();
    this.myForm = fb.group(
      {
        'name': ['Test', Validators.required],
        'date': [new Date()],
        'validityDay': [7, Validators.required],
        'price': [1000, Validators.required],
        'buyingLimit': [2, Validators.required],
        'durationInDays': [7, Validators.required],
        'priority': [1, Validators.required]
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
    this.appService.findAll()
      .subscribe(data => {
        this.applications = data.data!
        console.log(this.applications);
      });
      this.units$ = this.unitService.findAll();
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
      },
    };
    console.log(newOffer);
    // this.offerService.insert(newOffer).subscribe(data => console.log(data));
  }
  
  onAmountsSub() : void {
    const value = this.amountForm.value;
    let t_type = ";"
    let i_app_id = 0;

    switch (value.appName) {
      case "Internet":
        t_type = "i";
        i_app_id = 2;
        break;
      case "Appel":
        t_type = "c";
        i_app_id = -1;
        break;
      case "Message":
        t_type = "m";
        i_app_id = -1;
        break;
      case "Facebook":
        t_type = "i";
        i_app_id = 1;
        break;
    
      default:
        break;
    }

    const newAmount : Amount = {
      application : {
        id : 1,
        name : value.appName,
        t_type : t_type,
        internet_application_id : i_app_id,
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
