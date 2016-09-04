import { Component, OnInit } from '@angular/core';
import { TitlePageService } from '../../auth';

@Component({
  selector: 'sample',
  templateUrl: 'sample.component.html',
  styleUrls: ['sample.component.css']
})
export class SampleComponent implements OnInit {


  constructor(private _titlePageService: TitlePageService) {
    console.log('in sample constructor');
   }

  ngOnInit() {
    this._titlePageService.setTitle('Sample');
  }

}
