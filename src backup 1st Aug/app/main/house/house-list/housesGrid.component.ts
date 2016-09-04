import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { IHouse } from '../../../shared/interfaces';
import { Sorter } from '../../../shared/utils/sorter';
import { TrackByService } from '../../../shared/services/trackby.service';



@Component({ 
  selector: 'houses-grid',
  templateUrl: 'housesGrid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HousesGridComponent implements OnInit {

  @Input() houses: IHouse[] = [];
 


  constructor(private sorter: Sorter, public trackby: TrackByService) { }


ngOnInit() {

}


}


