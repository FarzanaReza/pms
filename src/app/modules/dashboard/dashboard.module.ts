import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PieChartComponent } from 'src/app/shared/pie-chart/pie-chart.component';
import { LineChartComponent } from 'src/app/shared/line-chart/line-chart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PieChartComponent,
    LineChartComponent,
    NgbModule,
    
  ]
})
export class DashboardModule { }
