import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-charts-info',
  templateUrl: './charts-info.component.html',
  styleUrls: ['./charts-info.component.scss']
})
export class ChartsInfoComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [10,10,10, 15,100,125,200], label: ' Tout offre confondue' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    responsive: true
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit(): void {
  }

}
