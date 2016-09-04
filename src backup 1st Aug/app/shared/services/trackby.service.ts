import { Injectable } from '@angular/core';

import { IHouse } from '../interfaces';

@Injectable()
export class TrackByService {

  house(index:number, house: IHouse) {
    return house.id;
  }
}
