import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
  standalone: true,
})
export class PieChartComponent {
  public chartData:number[] = [300, 500, 100];
  public chartLabels:string[] = ['Red', 'Blue', 'Yellow'];
}
