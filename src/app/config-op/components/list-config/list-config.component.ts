import { Component, OnInit } from '@angular/core';
import { CallsPricing, InternetPricing, MessagePricing, PricingService } from 'src/app/offer/services/pricing.service';

@Component({
  selector: 'app-list-config',
  templateUrl: './list-config.component.html',
  styleUrls: ['./list-config.component.scss']
})
export class ListConfigComponent implements OnInit {

  messagePricing : MessagePricing | undefined;
  callsPricing : CallsPricing | undefined;
  internetPricing : InternetPricing | undefined;

  constructor(
    private pricing : PricingService
  ) { }

  ngOnInit(): void {
    this.pricing.findMessagePricing()
      .subscribe(
        data => {
          this.messagePricing = data.data[0];
        }
      );
    
      this.pricing.findCallsPricing()
      .subscribe(
        data => {
          this.callsPricing = data.data[0];
        }
      );

      this.pricing.findInternetPricing()
      .subscribe(
        data => {
          this.internetPricing = data.data[0];
        }
      );
  }

}
