import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter-textbox',
  template: `

         <input type="text" name="filter"
                [(ngModel)]="model.filter" 
                (keyup)="filterChanged($event)"
                placeholder="{{placeholderText}}"  />

  `
})
export class FilterTextboxComponent {

    model: { filter: string } = { filter: null };

    @Input('placeholderTxt') placeholderText: string;

    @Output()
    changed: EventEmitter<string> = new EventEmitter<string>();

    filterChanged(event: any) {
      event.preventDefault();
      this.changed.emit(this.model.filter); //Raise changed event
    }
}
