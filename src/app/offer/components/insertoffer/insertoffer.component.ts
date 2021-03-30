import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Amount, Offer, Unit } from '../../offer';
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
  applications! : any;

  units$! : Observable<Unit[]>;

  @ViewChild('toast') toast : any;

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
        'isOneDay': [false, Validators.required],
      }
    );
    this.amountForm = fb.group({
      'appName' : [, Validators.required],
      'value' : [null, Validators.required],
      'unitName' : ['', Validators.required],
      'intra' : [null],
      'extra' : [null]
    });
  }

  ngOnInit(): void {
    this.appService.findAll()
      .subscribe(data => {
        this.applications = data.data![0]!
        console.log(this.applications);
      });
      this.units$ = this.unitService.findAll();
  }

  onSubmit(): void {
    const value = this.myForm.value;
    const newOffer : Offer = {
      id: 1,
      isOneDay : value.isOneDay,
      createdAt : Date.now().toString(),
      name : value.name,
      amounts : this.addedAmounts,
      price : value.price,
      validityDay : value.validityDay,
      limitation : {
        buyingLimit : value.buyingLimit,
        durationInDays: value.durationInDays
      },
    };
    console.log(newOffer);
    this.offerService.insert(newOffer)
    .subscribe(
      data => {
        if (data.status?.code == 200) {
          console.log(data);
        } else {
          this.toast.show(data.status?.message)
        }
      }
      );
  }
  
  onAmountsSub() : void {
    const value = this.amountForm.value;
    const internetApp =  this.applications.find((e: { name: any; }) => e.name == value.appName);
    console.log(internetApp.name);
    const newAmount : Amount = {
      application : {
        id : 1,
        name : internetApp.name,
        t_type : internetApp.t_type,
        internet_application_id : internetApp.internet_application_id,
        unit : {
          id: 1,
          suffix : value.unitName,
        }
      },
      value : value.value,
    };

    if (value.intra != null && value.extra != null) {
      newAmount["utilization"] = {
        intra : {
          price : value.intra,
          per : "sec"
        },
        extra : {
          price : value.extra,
          per : "sec"
        }
      };
    }
    console.log(newAmount);
    this.addedAmounts.push(newAmount);
  }
}
