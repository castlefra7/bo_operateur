import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

export interface Credential {
  phoneNumber?: string,
  pwd?: string
  name?: string,
  email?: string,
  id?: number
};

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  credentials : Credential = {};

  constructor(
    private auth : AuthService,
    private route : Router
    ) { }

  ngOnInit(): void {
  }

  signin(event : any) {
    event.preventDefault();
    if (this.credentials.phoneNumber != null && this.credentials.pwd != null) {
      this.auth.login(this.credentials.phoneNumber, this.credentials.pwd)
        .subscribe(data => {
            if (data.status?.code != 500) {
              localStorage.setItem(this.auth.AUTH_KEY, data.token!);
              this.route.navigateByUrl("");
            }
        });
    }
  }

}
