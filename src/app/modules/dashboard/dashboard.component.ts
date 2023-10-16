import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) {}

  // showSuccess() {
  //   this.notificationService.showSuccess('This is a success notification!');
  // }

  // showError() {
  //   this.notificationService.showError('This is an error notification!');
  // }

  addVehicle(){
    this.router.navigateByUrl(`vehicle/add`)
  }
  listVehicle(){
    this.router.navigateByUrl(`vehicle/list`)
  }
}
