import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Status } from '../offer/offer';
import { Credential } from '../signin/signin/signin.component';
import { environment } from "./../../environments/environment.prod";

export interface HttpAuthResp {
  status?: Status,
  credentials?: Credential,
  token?: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_KEY = "AuthOperateur";
  ADMIN_AUTH_KEY = "AuthAdmin";

  constructor(
    private http: HttpClient,
    private router : Router
    ) { }

  login(phoneNumber: string, pwd: string) : Observable<HttpAuthResp>{
    const options = {
      headers : {
        "Content-Type": "application/json"
      }
    };
    return this.http.post<HttpAuthResp>(
      `${environment.url}/auth/signin`,
      { phoneNumber : phoneNumber, password : pwd }
      , options);
  }

  loginAsAdmin(name: string, pwd: string) : Observable<HttpAuthResp>{
    const options = {
      headers : {
        "Content-Type": "application/json"
      }
    };
    return this.http.post<HttpAuthResp>(
      `${environment.url}/auth/signin/admin`,
      { name : name, password : pwd }
      , options);
  }

  isLoggedIn() : boolean {
    return localStorage.getItem(this.AUTH_KEY) != null;
  }

  logout () : void {
    localStorage.removeItem(this.AUTH_KEY);
    localStorage.removeItem(this.ADMIN_AUTH_KEY);
    this.router.navigateByUrl("");
  }

  isLoggedInAsAdmin() : boolean {
    return localStorage.getItem(this.ADMIN_AUTH_KEY) != null
  }
}
