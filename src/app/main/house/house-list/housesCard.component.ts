import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { IHouse } from '../../../shared/interfaces';
import { TrackByService } from '../../../shared/services/trackby.service';


@Component({ 
  selector: 'houses-card',
  templateUrl: 'housesCard.component.html',
  styleUrls: ['../styles.css'],
  //When using OnPush detectors, then the framework will check an OnPush 
  //component when any of its input properties changes, when it fires 
  //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
  changeDetection: ChangeDetectionStrategy.Default 
})
export class HousesCardComponent implements OnInit {

  @Input() houses: IHouse[] = [];
  
  constructor(public trackby: TrackByService) { }
  
  ngOnInit() {

  }

}

