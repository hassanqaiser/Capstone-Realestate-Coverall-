import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {
  GOOGLE_MAPS_PROVIDERS,
  provideLazyMapsAPILoaderConfig
} from 'angular2-google-maps/core';

import { mainRoutes }       from './mainRoutes';
import { AuthModule } from '../auth';
import { sharedModule }       from '../shared';
import { ToastrModule, provideToastr } from 'toastr-ng2';

import { HousesComponent } from './house/house-list/houses.component';
import { HousesCardComponent } from './house/house-list/housesCard.component';
import { HousesGridComponent } from './house/house-list/housesGrid.component';
import { GoogleMapComponent } from './house/googleMap/googleMap.component';
import { CardComponent } from './house/card/card.component';
import { ImgCarouselComponent } from './house/imgCarousel/imgCarousel.component';
import { HouseNewComponent } from './house/house-create/houseNew.component';
import { HouseComponent } from './house/house-edit-details/house.component';
import { FilterTextboxComponent } from '../shared/components/filterTextbox.component';




@NgModule({
  declarations: [
    HousesComponent,
    HousesCardComponent,
    HousesGridComponent,
    GoogleMapComponent,
    CardComponent,
    ImgCarouselComponent,
    HouseNewComponent,
    HouseComponent,
    FilterTextboxComponent
  ],
  imports: [
    HttpModule,
    mainRoutes,
    CommonModule,
    AuthModule,
    sharedModule.forRoot(),
    ToastrModule
  ],
  providers: [GOOGLE_MAPS_PROVIDERS,
    provideLazyMapsAPILoaderConfig({ apiKey: 'AIzaSyAGqeTvGGnuqDJSfIcOpjTCeqLPpx7LVOQ' }),
    provideToastr({
      timeOut: 500,
    })
  ]
})

export class mainModule {}







