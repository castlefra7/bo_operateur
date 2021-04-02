import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'operateur-back';
  showMobilemenu = false;

  constructor(
    private http: HttpClient,
    public auth: AuthService,
    public toastService : ToastService
    ) {}

  ngOnInit() {
  }

  mobileMenu() {
    this.showMobilemenu = !this.showMobilemenu;
  }

  close() {
    this.showMobilemenu = false;
  }
}
