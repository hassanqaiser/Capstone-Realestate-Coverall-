import { Injectable } from '@angular/core';
import Dexie from 'dexie';

import { IHouse } from '../interfaces';
import { FirebaseListObservable} from 'angularfire2';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppIDBDatabase extends Dexie {
  
    houses: Dexie.Table<IHouse, string>;

    db: any;
    constructor() {
        super("realestateQDatabase");
        var db = this;
        db.version(1).stores({
            houses: '$key, id, lat, lng, owner, city, location, address, bedrooms, bathrooms, price, area, type, purpose, imgUrl, imgAlt, additionalDetails'
        });
        db.open();
     }
}

export var appDB = new AppIDBDatabase();

export class House {

    getAllIDBHouses(): Observable<IHouse[]> {
        let tmpHouses: IHouse[] = [];
        appDB.houses.each((house) => {
            if (house.lat) {
                tmpHouses.push(house);
            }
        });
        return Observable.of(tmpHouses);
    }

    getIDBSize(): Dexie.Promise<number> {
        return appDB.houses.count();
    }

    saveAllHousesFirstTime(housesList: FirebaseListObservable<any>){
        appDB.houses.clear();
        housesList.subscribe((houses) => {
          houses.forEach((house) => {
            this.saveNewHouse(house, house.$key);
          });
        });
    }

    saveNewHouse(house: IHouse, fbid: string) {
        appDB.houses.add({
            $key: fbid,
            id: house.id,
            lat: house.lat,
            lng: house.lng,
            owner: house.owner,
            city: house.city,
            location: house.location,
            address: house.address,
            bedrooms: house.bedrooms,
            bathrooms: house.bathrooms,
            price: house.price,
            area: house.area,
            type: house.type,
            purpose: house.purpose,
            imgUrl: house.imgUrl,
            imgAlt: house.imgAlt,
            additionalDetails: house.additionalDetails
        }).catch(e => {
            console.log("Already Exists : " + fbid);
        });
    }
}

