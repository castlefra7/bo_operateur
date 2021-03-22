import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {

  newCustomer: Customer = {};
  signupSub$: any;

  succes = false;
  phoneNumber: string | undefined;

  constructor(private service: SignupService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.signupSub$) this.signupSub$.unsubscribe();
  }

  signup(event: any) {
    event.preventDefault();
    var dt = new Date(Date.now());
    this.newCustomer.createdAt = `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getUTCDate()} ${dt.getHours()}:${dt.getMinutes()}`;
    console.log(this.newCustomer);
    this.signupSub$ = this.service.signup(this.newCustomer)
      .subscribe(data => {
        if (data.status.code == 200) {
          console.log(data);
          this.succes = true;
          this.phoneNumber = data.data[0].phone_number; 
        }

      });
  }
}
