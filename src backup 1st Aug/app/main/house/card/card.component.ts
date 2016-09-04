import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { IHouse } from '../../../shared/interfaces';
@Component({
	selector: 'card',
	templateUrl: 'card.component.html',
	styleUrls: ['card.component.css']
})

export class CardComponent implements OnInit {
  @Input() house_details: IHouse[] = [];
  house: IHouse =
  {
    id: 0,
    lat: 0,
    lng: 0,
    owner: '',
    city: '',
    location: '',
    address: '',
    bedrooms: 0,
    bathrooms: 0,
    price: 0,
    area: 0,
    type: '',
    purpose: '',
    imgUrl: '',
    imgAlt: '',
    additionalDetails: ''
  };
  
	ngOnInit() { }
}