///<reference path="../../../../../typings/globals/jquery/index.d.ts" />
import { ToastrService } from 'toastr-ng2';
import {Component, ViewContainerRef} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TitlePageService } from '../../../auth';

import { DataService } from '../../../shared/services/data.service';
import { House } from '../../../shared/services/idb.service';
import { UploadService } from '../../../shared/services/upload.service';

import { IHouse } from '../../../shared/interfaces';



@Component({
  selector: 'house-new',
  templateUrl: 'houseNew.component.html',
  styleUrls: ['houseNew.component.css']
})
export class HouseNewComponent {

  house: IHouse =
  {
    $key: '',
    id: 1,
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

  errorMessage: string;
        


  constructor(private router: Router,
              private _titlePageService: TitlePageService,
              private route: ActivatedRoute,
              private dataService: DataService,
              private service:UploadService,
              private idbHouse: House,
              private toastrService: ToastrService,
              private viewContainerRef: ViewContainerRef) { 
    
    this._titlePageService.setTitle('Add New House');
    this.toastrService.viewContainerRef = this.viewContainerRef;
    // this.service.progress$.subscribe(
    //   data => {
    //     console.log('progress = '+data);
    //   });

  }


myFunction(event){

    // console.log('onChange');
    // var files = event.srcElement.files;
    // console.log(files);
    // this.service.makeFileRequest('http://localhost:8182/upload', [], files).subscribe(() => {
    //   console.log('sent');
    // });
}


  save(event: Event) {
    event.preventDefault();

    if (window.navigator.onLine) {
    this.dataService
        .addNewHouse(this.house)
        .subscribe((key) => {
          let res = String(key).split('/');
          this.idbHouse.saveNewHouse(this.house, res[res.length - 1]);
          this.router.navigate(['/houses']);
        });
		} else {
      console.log('Network is Down!');
      
			this.toastrService.error('Network is Down!');
		} 


  }

  onCancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/houses']);
  }

}