import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = ['JavaScript', 'Java', 'PHP'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    // [50, 150, 120],
    // [250, 130, 70]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.doughnutChartData = [
      [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 1000)]
    ];
  }

}
