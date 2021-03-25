import { Component, OnDestroy, OnInit } from '@angular/core';
import { CallHistory } from '../callHistory';
import { CallHistoryService } from '../services/call-history.service';

@Component({
  selector: 'app-calls-history',
  templateUrl: './calls-history.component.html',
  styleUrls: ['./calls-history.component.scss']
})
export class CallsHistoryComponent implements OnInit, OnDestroy {

  callsHistories : any;
  callsHistorySub$ : any;

  constructor(
    private callsHistory : CallHistoryService
  ) { }

  ngOnInit(): void {
    this.callsHistorySub$ = this.callsHistory.findAll()
    .subscribe(
      data => {
        this.callsHistories = data.data![0];
      },
      error => console.log(error),
    );
  }

  ngOnDestroy() : void {
    if (this.callsHistorySub$) this.callsHistorySub$.unsubscribe();
  }

}
