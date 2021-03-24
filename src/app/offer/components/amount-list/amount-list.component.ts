import { Component, Input, OnInit } from '@angular/core';
import { Amount } from '../../offer';

@Component({
  selector: 'app-amount-list',
  templateUrl: './amount-list.component.html',
  styleUrls: ['./amount-list.component.scss']
})
export class AmountListComponent implements OnInit {

  @Input() amounts : Amount[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
