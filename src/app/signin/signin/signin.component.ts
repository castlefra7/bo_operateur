import { Component, OnInit, ViewChild } from '@angular/core';
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

  admin : Credential = {};

  asAdmin = false;

  error = false;

  @ViewChild('toast') toast : any;

  constructor(
    private auth : AuthService,
    private route : Router
    ) { }

  ngOnInit(): void {
  }

  toggleIsAdmin() {
    this.asAdmin = !this.asAdmin;
  }

  signin(event : any) {
    event.preventDefault();
    if (this.credentials.phoneNumber != null && this.credentials.pwd != null) {
      this.auth.login(this.credentials.phoneNumber, this.credentials.pwd)
        .subscribe(data => {
          this.toast.show(data.status?.message)
            if (data.status?.code == 200) {
              localStorage.setItem(this.auth.AUTH_KEY, data.token!);
              this.route.navigateByUrl("");
            } else {
              this.toast.show(data.status?.message)
            }
        },
        error => this.toast.show(error))
    } else{
      this.toast.show("mot de passe et numéro obligatoires");
    }
  }

  signinAdmin(event : any) {
    event.preventDefault();
    if (this.admin.name != null && this.admin.pwd != null) {
      this.auth.loginAsAdmin(this.admin.name!, this.admin.pwd)
        .subscribe(data => {
            if (data.status?.code == 200) {
              localStorage.setItem(this.auth.ADMIN_AUTH_KEY, data.token!);
              this.route.navigateByUrl("");
              console.log(data);
            } else{
              this.toast.show(data.status?.message)
            }
        },
        error => this.toast.show(error));
    } else{
      this.toast.show("mot de passe et nom obligatoires");
    }
  }

}
