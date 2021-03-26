import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  @ViewChild('toast') toast : any; 

  constructor(public toastService : ToastService) { }

  ngOnInit(): void {
  }

  showMessage(message: string) {
    this.toast.show(message);
  }

}
