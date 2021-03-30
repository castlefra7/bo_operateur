import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TarificationService } from '../../services/tarification.service';
import { FraisMobileMoney, TarifAppel, TarifInternet, TarifMessage } from '../../tarif';

@Component({
  selector: 'app-insert-conf',
  templateUrl: './insert-conf.component.html',
  styleUrls: ['./insert-conf.component.scss']
})
export class InsertConfComponent implements OnInit, OnDestroy {

  @ViewChild('toast') toast : any;

  tarifAppel: TarifAppel = {};
  tarifMessage: TarifMessage = {};
  tarifInternet: TarifInternet = {};
  fraisMobileMoney: FraisMobileMoney = {};

  changeAppelSub$: any;
  changeMessageSub$: any;
  changeInternetSub$: any;
  changeMobileMoneySub$: any;
  currDate: string;

  errorMessage : string = '';

  constructor(private service: TarificationService) {
    var dt = new Date(Date.now());
    this.currDate = `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getUTCDate()} ${dt.getHours()}:${dt.getMinutes()}`;
  }

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

    this.tarifAppel.date = this.currDate;
    this.tarifAppel.application_id = 3;
    
    this.changeAppelSub$ = this.service.changeTarifAppels(this.tarifAppel)
      .subscribe(
        data => {
          if (data.status?.code == 200) {
            console.log(data);
          } else {
            this.toast.show(data.status?.message)
          }
        },
        error => this.toast.show(error.message)
        );
  }

  validateTarifMessage(event: any): void {
    event.preventDefault();
    this.tarifMessage.date = this.currDate;
    this.tarifMessage.application_id = 2;
    this.changeMessageSub$ = this.service.changeTarifMessage(this.tarifMessage)
      .subscribe(
        data => {
          if (data.status?.code == 200) {
            console.log(data);
          } else {
            this.toast.show(data.status?.message)
          }
        },
        error => this.toast.show(error.message)
      );
  }

  validateTarifInternet(event: any): void {
    event.preventDefault();
    this.tarifInternet.date = this.currDate;
    this.changeInternetSub$ = this.service.changeTarifInternet(this.tarifInternet)
      .subscribe(
        data => {
          if (data.status?.code == 200) {
            console.log(data);
          } else {
            this.toast.show(data.status?.message)
          }
        },
        error => this.toast.show(error.message)
        );
  }

  validateFraisMobileMoney(event: any): void {
    event.preventDefault();
    this.fraisMobileMoney.date = this.currDate;
    this.changeMobileMoneySub$ = this.service.changeFraisMobileMoney(this.fraisMobileMoney)
      .subscribe(
        data => {
          if (data.status?.code == 200) {
            console.log(data);
          } else {
            this.toast.show(data.status?.message)
          }
        },
        error => this.toast.show(error.message)
        );
  }
}
