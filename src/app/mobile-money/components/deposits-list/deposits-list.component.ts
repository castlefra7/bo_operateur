import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Deposit, MobileMoneyService } from '../../services/mobile-money.service';

@Component({
  selector: 'app-deposits-list',
  templateUrl: './deposits-list.component.html',
  styleUrls: ['./deposits-list.component.scss']
})
export class DepositsListComponent implements OnInit {
  @Input() allDeposits: Deposit[] = [];
  @Output() sendUpdate: EventEmitter<Number>;
  constructor() {
    this.sendUpdate = new EventEmitter();
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
  }

  update(id: Number) {
    this.sendUpdate.emit(id);
  }

}
