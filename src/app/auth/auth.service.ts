import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Status } from '../offer/offer';
import { Credential } from '../signin/signin/signin.component';

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

  readonly url ="http://localhost:8080";

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
      `${this.url}/auth`, 
      { phoneNumber : phoneNumber, password : pwd }
      , options);
  }

  isLoggedIn() : boolean {
    return localStorage.getItem(this.AUTH_KEY) != null;
  }

  logout () : void {
    localStorage.removeItem(this.AUTH_KEY);
    this.router.navigateByUrl("");
  }
}
