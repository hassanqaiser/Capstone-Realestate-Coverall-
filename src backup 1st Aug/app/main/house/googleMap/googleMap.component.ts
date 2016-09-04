import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IHouse } from '../../../shared/interfaces';
declare var google: any;

import {
  MouseEvent,
  GOOGLE_MAPS_DIRECTIVES
} from 'angular2-google-maps/core';

@Component({
	selector: 'googleMap',
	styles:[`
	  .sebm-google-map-container {
	    height: 450px;
	    width: 100%;
	  }
		@media (min-width: 992px) {

		  .map {
		    position: absolute;
		    top: 0;
		    left: 0;
		    width: 100%;
		    height: 100%;
		  }
		}
		@media (max-width: 992px) {
		
		  .map {
		    height: 650px;
		  }
		}
		@media (max-width: 768px) {
		  .map {
		    height: 450px;
		  }
		}
		@media (max-width: 450px) {
		  .map {
		    height: 320px;
		  }
		}
		
  	`],
	directives: [GOOGLE_MAPS_DIRECTIVES],
	templateUrl: 'googleMap.component.html'
})

export class GoogleMapComponent implements OnInit {

	@Input() houses: IHouse[] = [];
  // google maps zoom level
  zoom: number = 12;

  // initial center position for the map
  lat: number = 31.51;
  lng: number = 74.43;
	
	ngOnInit() { }
}
