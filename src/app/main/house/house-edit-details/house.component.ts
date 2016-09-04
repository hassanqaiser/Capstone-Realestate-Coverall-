import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TitlePageService } from '../../../auth';
import { IHouse } from '../../../shared/interfaces';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from 'angularfire2';
import { DataService } from '../../../shared/services/data.service';

import { TrackByService } from '../../../shared/services/trackby.service';


@Component({ 
  selector: 'house',
  templateUrl: 'house.component.html',
  styleUrls:['house.component.css']
})
export class HouseComponent implements OnInit {

    house_details: IHouse[] = [];
    HouseId: number;
    constructor(private dataService: DataService,
    private _titlePageService: TitlePageService, private _router: Router, private route: ActivatedRoute, public trackby: TrackByService) { 

      //| house.id === HouseId
    }

    ngOnInit() {
      this._titlePageService.setTitle('House Details');

      // this.route.params
      //     .map(params => params['id'])
      //     .subscribe((id) => {
      //       this.dataService
      //         .getHouse(id)
      //         .subscribe(house => this.house = house);
      //     });

      this.HouseId = this.route.snapshot.params['id'];


      this.dataService.getHouse()
        .subscribe((houses: IHouse[]) => {
          this.house_details = houses.filter(house => {
            return house.id == this.HouseId;
          });
        });


    }


}
