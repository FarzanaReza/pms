import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { NotificationService } from './services/notification.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { AppStoreModule } from './store/app-store.module';
import { vehicleReducer } from './store/vehicle/vehicle.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    NgChartsModule,
    AppStoreModule,
    StoreModule.forRoot({ 
      vehicle: vehicleReducer 
    }),
    StoreDevtoolsModule.instrument({
			maxAge: 25,
			// logOnly: environment.production,
			autoPause: true,
		}),
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
