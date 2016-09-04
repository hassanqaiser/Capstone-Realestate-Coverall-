import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitlePageService } from '../../../auth';
import { IHouse } from '../../../shared/interfaces';

@Component({ 
  selector: 'house',
  templateUrl: 'house.component.html',
  styleUrls:['house.component.css']
})
export class HouseComponent implements OnInit {
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
    
    constructor(private _titlePageService: TitlePageService, private _router: Router) { }

    ngOnInit() {
      this._titlePageService.setTitle('House Details');

    }

}
