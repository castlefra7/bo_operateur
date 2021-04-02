import { Component, OnInit } from '@angular/core';
import { CallsPricing, InternetPricing, MessagePricing, PricingService } from 'src/app/offer/services/pricing.service';

@Component({
  selector: 'app-list-config',
  templateUrl: './list-config.component.html',
  styleUrls: ['./list-config.component.scss']
})
export class ListConfigComponent implements OnInit {

  messagePricing: MessagePricing = { amount_exterior: 0, amount_interior: 0, created_at : "", unit : 0 };
  callsPricing : CallsPricing = { amount_exterior: 0, amount_interior: 0, created_at : "" };
  internetPricing : InternetPricing = { amount: 0, created_at:"" };

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
