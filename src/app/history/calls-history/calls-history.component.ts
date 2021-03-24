import { Component, OnDestroy, OnInit } from '@angular/core';
import { CallHistory } from '../callHistory';
import { CallHistoryService } from '../services/call-history.service';

@Component({
  selector: 'app-calls-history',
  templateUrl: './calls-history.component.html',
  styleUrls: ['./calls-history.component.scss']
})
export class CallsHistoryComponent implements OnInit, OnDestroy {

  callsHistories : CallHistory[] = [];

  callsHistorySub$ : any;

  constructor(
    private callsHistory : CallHistoryService
  ) { }
test() {
  this.callsHistorySub$ = this.callsHistory.findAll()
  .subscribe(
    data => console.log(data),
    error => alert(JSON.stringify(error))
  );
}

  ngOnInit(): void {
   
  }

  ngOnDestroy() : void {
    if (this.callsHistorySub$) this.callsHistorySub$.unsubscribe();
  }

}
