import { Component, OnDestroy, OnInit } from '@angular/core';
import { TarificationService } from '../../services/tarification.service';
import { FraisMobileMoney, TarifAppel, TarifInternet, TarifMessage } from '../../tarif';

@Component({
  selector: 'app-insert-conf',
  templateUrl: './insert-conf.component.html',
  styleUrls: ['./insert-conf.component.scss']
})
export class InsertConfComponent implements OnInit, OnDestroy {

  tarifAppel : TarifAppel = {};
  tarifMessage : TarifMessage = {};
  tarifInternet : TarifInternet = {};
  fraisMobileMoney : FraisMobileMoney = {};

  changeAppelSub$ : any;
  changeMessageSub$ : any;
  changeInternetSub$ : any;
  changeMobileMoneySub$ : any;

  constructor(private service : TarificationService) { }

  ngOnInit(): void {
  }
    
  ngOnDestroy(): void {
    if (this.changeAppelSub$) this.changeAppelSub$.unsubscribe();
    if (this.changeMessageSub$) this.changeMessageSub$.unsubscribe();
    if (this.changeInternetSub$) this.changeInternetSub$.unsubscribe();
    if (this.changeMobileMoneySub$) this.changeMobileMoneySub$.unsubscribe();
  }


  validateTarifAppel(event: any): void {
    event.preventDefault();
    this.tarifAppel.date = new Date(Date.now()).toISOString();
    this.tarifAppel.application_id = 3;
    this.changeAppelSub$ = this.service.changeTarifAppels(this.tarifAppel)
      .subscribe(data => console.log(data));
  }

  validateTarifMessage(event: any): void {
    event.preventDefault();
    this.tarifMessage.date = new Date(Date.now()).toISOString();
    this.tarifMessage.application_id = 2;
    this.changeMessageSub$ = this.service.changeTarifMessage(this.tarifMessage)
      .subscribe(data => console.log(data));
  }

  validateTarifInternet(event: any): void {
    event.preventDefault();
    this.tarifInternet.date = new Date(Date.now()).toISOString();
    this.changeInternetSub$ = this.service.changeTarifInternet(this.tarifInternet)
      .subscribe(data => console.log(data));
  }

  validateFraisMobileMoney(event: any): void {
    event.preventDefault();
    this.fraisMobileMoney.date = new Date(Date.now()).toISOString();
    this.changeMobileMoneySub$ = this.service.changeFraisMobileMoney(this.fraisMobileMoney)
      .subscribe(data => console.log(data));
  }
}
