import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Vehicle } from 'src/app/models/vehicle.model';

// Define a feature selector to select the slice of state
export const selectItemState = createFeatureSelector<Vehicle[]>('vehicle');

// Create a selector to retrieve items from the state
export const selectAllItems = createSelector(selectItemState, (vehicle: Vehicle[]) => vehicle);
