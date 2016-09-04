import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { IHouse } from '../../../shared/interfaces';
@Component({
	selector: 'card',
	templateUrl: 'card.component.html',
	styleUrls: ['card.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class CardComponent implements OnInit {
  @Input() house_details: IHouse[] = [];
  
	ngOnInit() { }
}