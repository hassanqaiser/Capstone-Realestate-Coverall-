import { Component, AfterViewInit, OnInit, OnChanges, SimpleChange, ChangeDetectionStrategy } from '@angular/core';
//import { Observable } from 'rxjs/Observable';

import { DataService } from '../../../shared/services/data.service';
import { IHouse } from '../../../shared/interfaces';
import { House } from '../../../shared/services/idb.service';
import { TitlePageService } from '../../../auth';

import 'rxjs/add/operator/toPromise';

@Component({ 
  selector: 'houses', 
  templateUrl: 'houses.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})

export class HousesComponent implements OnInit , OnChanges{

  title: string;
  filterText: string;
  placeholderTxtCity: string;
  placeholderTxtLocation: string;
  placeholderTxtType: string;
  houses: IHouse[] = [];
  filteredhouses: IHouse[] = [];
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;
  onlineStatus: boolean = true;

  constructor(private dataService: DataService, private _titlePageService: TitlePageService, private idbHouse: House) { 
    
  }
  
  ngOnInit() {
    
    this._titlePageService.setTitle('Houses');
    this.title = 'Houses';
    this.placeholderTxtCity = 'Filter City';
    this.placeholderTxtLocation = 'Filter Location';
    this.placeholderTxtType = 'Filter Type';
    this.filterText = 'Filter Houses:';
    this.displayMode = DisplayModeEnum.Card;

		if (window.navigator.onLine) {
			this.onlineStatus = true;
      this.displayMode = DisplayModeEnum.Grid;
		} else {
			this.onlineStatus = false;
      this.displayMode = DisplayModeEnum.Card;
		} 


    this.idbHouse.getAllIDBHouses()
      .toPromise()
      .then((houses) => {
        this.houses = this.filteredhouses = houses;
        this.dataService.gethouses()
          .subscribe((houses: IHouse[]) => {
            this.houses = this.filteredhouses = houses;
          });
      })
      .catch((err) => {
        this.dataService.gethouses()
          .subscribe((houses: IHouse[]) => {
            this.houses = this.filteredhouses = houses;
          });
      });

  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log('Change detected:', changes);
  }

  changeDisplayMode(mode: DisplayModeEnum) {
      this.displayMode = mode;
  }

  filterChanged(data: string, searchIn: string) {
    if (data && this.houses) {
        data = data.toUpperCase();

        let filtered = this.houses.filter(item => {
            let match = false;

              if (item[searchIn].toString().toUpperCase().indexOf(data) > -1) {
                match = true;
              }

            return match;
        });
        this.filteredhouses = filtered;
    }
    else {
      this.filteredhouses = this.houses;
    }
  }

}

enum DisplayModeEnum {
  Card = 1,
  Grid = 0
}
