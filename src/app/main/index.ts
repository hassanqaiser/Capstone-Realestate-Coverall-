import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {
  GOOGLE_MAPS_PROVIDERS,
  provideLazyMapsAPILoaderConfig
} from 'angular2-google-maps/core';

import {MdCardModule} from '@angular2-material/card';
import {MdButtonModule} from '@angular2-material/button';
import {MdIconModule} from '@angular2-material/icon';
import {MdButtonToggleModule} from '@angular2-material/button-toggle/button-toggle';
import {MdCheckboxModule} from '@angular2-material/checkbox/checkbox';
import {MdRadioModule} from '@angular2-material/radio/radio';
import {MdSlideToggleModule} from '@angular2-material/slide-toggle/slide-toggle';
import {MdSliderModule} from '@angular2-material/slider/slider';
import {MdListModule} from '@angular2-material/list/list';
import {MdGridListModule} from '@angular2-material/grid-list/grid-list';
import {MdProgressCircleModule} from '@angular2-material/progress-circle/progress-circle';
import {MdProgressBarModule} from '@angular2-material/progress-bar/progress-bar';
import {MdInputModule} from '@angular2-material/input/input';
import {MdTabsModule} from '@angular2-material/tabs/tabs';
import {MdToolbarModule} from '@angular2-material/toolbar/toolbar';
import {MdSidenavModule} from '@angular2-material/sidenav/sidenav';
import {MdTooltipModule} from '@angular2-material/tooltip/tooltip';
import {MdRippleModule} from '@angular2-material/core/ripple/ripple';
import {PortalModule} from '@angular2-material/core/portal/portal-directives';
import {OverlayModule} from '@angular2-material/core/overlay/overlay-directives';
import {MdMenuModule} from '@angular2-material/menu/menu';
import {RtlModule} from '@angular2-material/core/rtl/dir';

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
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdButtonToggleModule,
    MdCheckboxModule,
    MdRadioModule,
    MdSlideToggleModule,
    MdSliderModule,
    MdSidenavModule,
    MdListModule,
    MdGridListModule,
    MdProgressCircleModule,
    MdProgressBarModule,
    MdInputModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    MdRippleModule,
    PortalModule,
    OverlayModule,
    MdMenuModule,
    RtlModule,
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







