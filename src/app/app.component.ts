import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'operateur-back';

  constructor(
    private http: HttpClient,
    public auth: AuthService
    ) {}

  ngOnInit() {
    /*const headers = {'Content-Type': 'application/json'};

    this.http.post('http://localhost:8080/mobilemoney/deposit', JSON.stringify({amount: 10000, phone_number: '0342569356', date: new Date()}), {headers}).subscribe(response => console.log(response));  }

    his.http.get('http://localhost:8080/mobilemoney').subscribe(response => console.log(response));  }*/
  }
}
