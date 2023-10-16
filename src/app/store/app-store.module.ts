import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { vehicleReducer } from './vehicle';


@NgModule({
	imports: [
		// Signature matches AppState interface
      // StoreModule.forRoot({ vehicle: vehicleReducer }),
	],
})
export class AppStoreModule {}
