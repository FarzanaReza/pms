import { createReducer, on } from '@ngrx/store';
import * as ItemActions from './vehicle.actions';
import { Vehicle } from 'src/app/models/vehicle.model';
// export const initialState: any[] = [];

export const initialState: Vehicle[] = [{
    id: null,
	  ownerName: '',
    vehicleType: '',
    licenseNumber: '', 
    entryTime: '', 
    exitTime: '', 
    status: '', 
    ownerPhone: '', 
    ownerAddress: '', 
    parkingCharge: null
}];

export const vehicleReducer = createReducer(
  initialState,
//   on(ItemActions.itemsLoaded, (state, { vehicle }) => [...vehicle]),
  on(ItemActions.itemsLoaded, (state, { vehicle }) => {
    return { ...vehicle };
}),
  on(ItemActions.itemsLoadError, (state, { error }) => {
    // handle error
    return state;
  })
);
