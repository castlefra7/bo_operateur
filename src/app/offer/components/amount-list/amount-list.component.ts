import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Amount } from '../../offer';

@Component({
  selector: 'app-amount-list',
  templateUrl: './amount-list.component.html',
  styleUrls: ['./amount-list.component.scss']
})
export class AmountListComponent implements OnInit {

  @Input() amounts : Amount[] = [];
  @Output() onDelete = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  remove(idx : number) {
    this.onDelete.emit(idx.toString());
  }

}
