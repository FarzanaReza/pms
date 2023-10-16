import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleComponent } from './vehicle.component';
import { AllVehicleComponent } from './all-vehicle/all-vehicle.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.modle';


@NgModule({
  declarations: [
    VehicleComponent,
    AllVehicleComponent,
    AddVehicleComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class VehicleModule { }
