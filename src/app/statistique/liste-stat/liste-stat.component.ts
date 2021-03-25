import { Component, OnInit } from '@angular/core';
import { StatService } from '../services/stat.service';
import { Statistique } from '../statistique';

@Component({
  selector: 'app-liste-stat',
  templateUrl: './liste-stat.component.html',
  styleUrls: ['./liste-stat.component.scss']
})
export class ListeStatComponent implements OnInit {

  date : string = "";
  stats : any;

  constructor(
    private stat : StatService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() : void {
    if (this.date != "") {
      this.stat.findAll(this.date)
        .subscribe(
          data => this.stats = data.data![0]
          ,
          error => console.error(error),
        );
    }
  }

}
