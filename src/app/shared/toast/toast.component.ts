import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  message = '';
  showing = false;

  constructor() { 
    

  }

  ngOnInit(): void {
  }

  public show(message : string) {
    this.message = message;
    this.showing = true;
    setTimeout(() => {
      this.showing = false
    }, 3000);
  }

}
