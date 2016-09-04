import { Component, AfterViewInit, OnInit } from '@angular/core';
//import { Observable } from 'rxjs/Observable';

import { DataService } from '../../../shared/services/data.service';
import { IHouse } from '../../../shared/interfaces';

import { TitlePageService } from '../../../auth';
declare var jQuery:any;
@Component({ 
  selector: 'houses', 
  templateUrl: 'houses.component.html',
  styleUrls: ['../styles.css']
})
export class HousesComponent implements OnInit, AfterViewInit {

  title: string;
  filterText: string;
  placeholderTxtCity: string;
  placeholderTxtLocation: string;
  placeholderTxtType: string;
  houses: IHouse[] = [];
  filteredhouses: IHouse[] = [];
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;
  
  constructor(private dataService: DataService, private _titlePageService: TitlePageService) { }
  
  ngAfterViewInit() {
    // Your jQuery code goes here
    jQuery('#minArea').text = 'hello';
  }

  ngOnInit() {
    
    this._titlePageService.setTitle('Houses');
    this.title = 'Houses';
    this.placeholderTxtCity = 'Filter City';
    this.placeholderTxtLocation = 'Filter Location';
    this.placeholderTxtType = 'Filter Type';
    this.filterText = 'Filter Houses:';
    this.displayMode = DisplayModeEnum.Grid;

    this.dataService.gethouses()
        .subscribe((houses: IHouse[]) => {
          this.houses = this.filteredhouses = houses;
          console.log(houses);
          
        });

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
