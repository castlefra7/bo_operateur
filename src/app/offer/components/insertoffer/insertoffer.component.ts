import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Amount, Offer, Unit } from '../../offer';
import { ApplicationService } from '../../services/application.service';
import { OfferService, OfferType } from '../../services/offer.service';
import { PricingService } from '../../services/pricing.service';
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

  isUnlimited = false;

  @ViewChild('toast') toast : any;

  constructor(
    private fb: FormBuilder, 
    private offerService: OfferService,
    private unitService : UnitService,
    private appService : ApplicationService,
    private router: Router,
    private pricing : PricingService
    ) {
    this.allOfferTypes = offerService.getAllOfferTypes();
    this.myForm = fb.group(
      {
        'name': ['Test', Validators.required],
        'code': ['', Validators.required],
        'date': [new Date()],
        'validityDay': [7, Validators.required],
        'price': [1000, Validators.required],
        'buyingLimit': [2, Validators.required],
        'durationInDays': [7, Validators.required],
        'isOneDay': [false, Validators.required],
        'hourMin' : [],
        'hourMax' : []
      }
    );
    this.amountForm = fb.group({
      'appName' : [, Validators.required],
      'isIllimited': [false, Validators.required],
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
      hourMin : value.hourMin || -1,
      hourMax : value.hourMax || -1,
      code: value.code,
      isOneDay : value.isOneDay,
      createdAt : new Date(Date.now()).toISOString(),
      name : value.name,
      amounts : this.addedAmounts,
      price : value.price || -1,
      validityDay : value.validityDay || -1,
      limitation : {
        buyingLimit : value.buyingLimit || -1,
        durationInDays: value.durationInDays || -1
      },
    };
    console.log(newOffer);
    
    this.offerService.insert(newOffer)
    .subscribe(
      data => {
        if (data.status?.code == 200) {
          console.log(data);
          this.toast.show("Offre créée");
        } else {
          this.toast.show(data.status?.message)
        }
      }
      );
  }
  
  onAmountsSub() : void {
    const value = this.amountForm.value;
    const internetApp =  this.applications.find((e: { name: any; }) => e.name == value.appName);
    console.log(this.isUnlimited);
    
    const newAmount : Amount = {
      isUnlimited : this.isUnlimited,
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
      value : this.isUnlimited ? null :  value.value || -1, 
    };

    if (value.intra != null && value.extra != null && !this.isUnlimited) {
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

  toggleIsLimitted(){
    this.isUnlimited = !this.isUnlimited;
  }

  ato(appName : string) {
    if (appName == "appel" && !this.isUnlimited && this.amountForm.controls['unitName'].value == "Ar") {
      this.pricing.findCallsPricing()
        .subscribe(
          data => {
            this.amountForm.controls['intra'].setValue(data.data[0].amount_interior);
            this.amountForm.controls['extra'].setValue(data.data[0].amount_exterior);
          }
        );
    }
    else if (appName == "message") {
      this.pricing.findMessagePricing()
        .subscribe(
          data => {
            this.amountForm.controls['intra'].setValue(data.data[0].amount_interior);
            this.amountForm.controls['extra'].setValue(data.data[0].amount_exterior);
          }
        );
    }
  }

  remove(event : any) {
    this.addedAmounts.splice(event, 1);
  }
}
