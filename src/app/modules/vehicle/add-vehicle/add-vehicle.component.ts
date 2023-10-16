import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Vehicle } from 'src/app/models/vehicle.model';
import { selectAllItems } from 'src/app/store/vehicle';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent {
  vehicleForm!: FormGroup;
  loadVehicle!: Vehicle
  mode=''
  constructor(
    private formBuilder: FormBuilder, 
    private store: Store<{ vehicle: Vehicle }>,
    private _route: ActivatedRoute,
    private router: Router,
    private location: Location
    ){
      const urlPath = this._route.snapshot.url[0].path;
      this.mode = urlPath
      console.log(this.mode);
      
    }

  ngOnInit() {
    this.initForm()
    this.loadStore()

    this.loadForm()
  }

  initForm(){
    this.vehicleForm = this.formBuilder.group({
      vehicleLicenseNumber: ['', Validators.required],
      vehicleType: ['', Validators.required],
      vehicleOwnerName: ['', Validators.required],
      vehicleOwnerPhone: ['',[ Validators.required, Validators.pattern('[0-9]*')]],
      status: ['', Validators.required],
      vehicleOwnerAddress: ['', Validators.required],
      vehicleEntry: ['', Validators.required],
      vehicleExit: ['', Validators.required],
      parkingCharge: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    });
  }

  loadForm(){
    if(this.mode === 'edit'){
      this.vehicleForm.patchValue({
        vehicleLicenseNumber: this.loadVehicle?.licenseNumber ? this.loadVehicle?.licenseNumber : '',
        vehicleType: this.loadVehicle?.vehicleType ? this.loadVehicle?.vehicleType : '',
        vehicleOwnerName: this.loadVehicle?.ownerName ? this.loadVehicle?.ownerName : '',
        vehicleOwnerPhone: this.loadVehicle?.ownerPhone ? this.loadVehicle?.ownerPhone : '',
        status: this.loadVehicle?.status ? this.loadVehicle?.status : '',
        vehicleOwnerAddress: this.loadVehicle?.ownerAddress ? this.loadVehicle?.ownerAddress : '',
        vehicleEntry: this.loadVehicle?.entryTime ? this.loadVehicle?.entryTime : '',
        vehicleExit: this.loadVehicle?.exitTime ? this.loadVehicle?.exitTime : '',
        parkingCharge: this.loadVehicle?.parkingCharge ? this.loadVehicle?.parkingCharge : '',
      })
    }
  }

  loadStore(){
    this.store.select(selectAllItems).subscribe(
			(selectAllItems) => {
        if (selectAllItems != null && selectAllItems != undefined) {
					this.loadVehicle = JSON.parse(JSON.stringify(selectAllItems));
          console.log(this.loadVehicle);
          
				}
      })    
  }

  onSubmit() {
    // console.log('Form submitted', this.vehicleForm.value);

    if (this.vehicleForm.valid) {
      // console.log('Form submitted', this.vehicleForm.value);
      this.router.navigateByUrl(`vehicle/list`)
    }
  }

  goBack(): void {
    this.location.back();
  }

}
