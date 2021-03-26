import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { StatService } from '../services/stat.service';


@Component({
  selector: 'app-charts-info',
  templateUrl: './charts-info.component.html',
  styleUrls: ['./charts-info.component.scss']
})
export class ChartsInfoComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Dépôt' },
    { data: [], label: 'Retrait' },
  ];
  public lineChartLabels: Label[] = [
    // 'January', 'February', 'March', 'April', 'May', 'June', 'July'
  ];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'yellowgreen',
      backgroundColor: '',
    },
    {
      borderColor: 'red',
      backgroundColor: '',
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private statService: StatService) { }

  ngOnInit(): void {
    this.statService.dailyMobileMoneyOps().subscribe(data => {
      if (data.status?.code == 200) {
        if (data?.data) {
          var d = data?.data;
          console.log(d);
          if (d[1].labels.length > d[0].labels.length) {
            this.lineChartLabels = d[1].labels;

          } else {
            this.lineChartLabels = d[0].labels;

          }
          this.lineChartData[0].data = d[0].data;


          this.lineChartData[1].data = d[1].data;
        }

      }
    })
  }

}
