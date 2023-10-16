import { createAction, props } from '@ngrx/store';
import { Vehicle } from 'src/app/models/vehicle.model';

export const loadItems = createAction('[Items] Load Items');
export const itemsLoaded = createAction('[Items] Items Loaded', props<{ vehicle: Vehicle[] }>());
export const itemsLoadError = createAction('[Items] Items Load Error', props<{ error: any }>());
