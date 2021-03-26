import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from 'src/app/offer/offer';
import { environment } from 'src/environments/environment.prod';
import { Customer } from '../customer';

export interface HttpSignupResponse {
  status : Status,
  data : Customer[]
}

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http : HttpClient) { }

  signup(customer : Customer) : Observable<HttpSignupResponse>{
    const options = {
      headers : {
        "Content-Type": "application/json"
      }
    };
    return this.http.post<HttpSignupResponse>(`${environment.url}/auth/signup`, customer, options);
  }
}
