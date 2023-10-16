import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleComponent } from './vehicle.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { AllVehicleComponent } from './all-vehicle/all-vehicle.component';

const routes: Routes = [
  { path: 'add', component: AddVehicleComponent },
  { path: 'edit/:id', component: AddVehicleComponent },
  { path: 'list', component: AllVehicleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
