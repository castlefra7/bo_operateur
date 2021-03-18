import { Component, OnInit } from '@angular/core';
import { Offer } from '../../offer';
import { OfferService } from '../../services/offer.service';

@Component({
  selector: 'app-list-offers',
  templateUrl: './list-offers.component.html',
  styleUrls: ['./list-offers.component.scss']
})
export class ListOffersComponent implements OnInit {

  offers: Offer[] | undefined = [];

  constructor(private offer: OfferService) { }

  ngOnInit(): void {
    this.offer.findAll()
      .subscribe(
        data =>  this.offers = data.data );
  }
}
