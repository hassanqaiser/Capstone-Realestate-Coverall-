///<reference path="../../../../../typings/globals/jquery/index.d.ts" />
import {Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TitlePageService } from '../../../auth';

import { DataService } from '../../../shared/services/data.service';
import { UploadService } from '../../../shared/services/upload.service';

import { IHouse } from '../../../shared/interfaces';
declare var $:JQueryStatic;
@Component({
  selector: 'house-new',
  styleUrls:['houseNew.component.css'],
  templateUrl: 'houseNew.component.html'
})
export class HouseNewComponent {

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

  errorMessage: string;
        


  constructor(private router: Router,
              private _titlePageService: TitlePageService,
              private route: ActivatedRoute,
              private dataService: DataService,
              private service:UploadService) { 
    
    this._titlePageService.setTitle('Add New House');
    
    this.service.progress$.subscribe(
      data => {
        console.log('progress = '+data);
      });

  }


myFunction(event){

    console.log('onChange');
    var files = event.srcElement.files;
    console.log(files);
    this.service.makeFileRequest('http://localhost:8182/upload', [], files).subscribe(() => {
      console.log('sent');
    });
}


  onSubmit() {
      // this.dataService.XXXX(this.house)
      //   .subscribe((status: boolean) => {
      //     if (status) {
      //       this.router.navigate(['/']);
      //     }
      //     else {
      //       this.errorMessage = 'Unable to save house';
      //     }
      // });
  }

  onCancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/']);
  }

}