import { Component, OnInit } from '@angular/core';
import { Deposit, MobileMoneyService } from './services/mobile-money.service';


@Component({
  selector: 'app-mobile-money',
  templateUrl: './mobile-money.component.html',
  styleUrls: ['./mobile-money.component.scss']
})
export class MobileMoneyComponent implements OnInit {
  allDeposits: Deposit[]  | undefined = [];
  constructor(private mobileService: MobileMoneyService) {

    
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.mobileService.allDeposits().subscribe(data => {
      if(data.status?.code == 200) {
        this.allDeposits = data.data;
        console.log("at");
        console.log(data.data);
      }
    });
  }

  updateDeposit(id: Number) {
    console.log(id);
    this.mobileService.validateDeposit(id).subscribe(data => {

      if(data.status?.code == 200) {
        this.fetchData();
      }
    })
    
  }

}
