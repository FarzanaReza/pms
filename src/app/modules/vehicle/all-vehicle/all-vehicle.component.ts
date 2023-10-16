import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Vehicle } from 'src/app/models/vehicle.model';
import { StaticData } from 'src/app/static-data/static-data';
import { itemsLoaded } from 'src/app/store/vehicle/vehicle.actions';
import { Location } from '@angular/common';


@Component({
  selector: 'app-all-vehicle',
  templateUrl: './all-vehicle.component.html',
  styleUrls: ['./all-vehicle.component.css']
})
export class AllVehicleComponent {
  listVehicle = StaticData.vehicleList
  constructor(
    private store: Store<{ vehicle: Vehicle[] }>, 
    private router: Router,
    private location: Location
    ){}
  ngOnInit(){
    console.log(this.listVehicle);
  }
  editVehicle(vehicle:Vehicle){
    console.log(vehicle);
    this.store.dispatch(
      itemsLoaded({
				vehicle:  JSON.parse(JSON.stringify(vehicle)),
			})
    );
    this.router.navigateByUrl(`vehicle/edit/${vehicle.id}`) 
  }
  goBack(): void {
    this.location.back();
  }
}
