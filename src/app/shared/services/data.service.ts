import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { IHouse } from '../interfaces';

import {House} from './idb.service';

@Injectable()
export class DataService {
  
    _baseUrl: string = '';
    houses: FirebaseListObservable<IHouse[]>;
    filteredHouse$: FirebaseListObservable<IHouse[]>;
    private filter$: ReplaySubject<any> = new ReplaySubject(1);

    newHouse: FirebaseObjectObservable<IHouse>;
    
    af: any;
    constructor(af: AngularFire, private idbHouse: House) {
        this.af = af;
        this.houses = this.af.database.list('Houses');
        this.idbHouse.getIDBSize().then((length) => {
            if(length <= 0 ) {
                this.idbHouse.saveAllHousesFirstTime(this.houses);
            }
        });
     }


    gethouses(): FirebaseListObservable<IHouse[]> {
        if (this.houses) {
            return this.houses;
        } else {
            this.houses = this.af.database.list('Houses');
            this.idbHouse.getIDBSize().then((length) => {
                if(length <= 0 ) {
                    this.idbHouse.saveAllHousesFirstTime(this.houses);
                }
            });
            return this.houses;
        }
    }

     getHouse(): FirebaseListObservable<IHouse[]> {
        if(this.houses) {
            return this.houses;
        } else {
            this.houses = this.af.database.list('Houses');        
            return this.houses;
        }
    }
    
    addNewHouse(house: IHouse): Observable<any> {
        const houses = this.af.database.list('Houses');

        const newId = houses.push({
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
        });

        


        return Observable.of(newId);
    }
    // gethouse(id: number) : Observable<IHouse> {
    //     if (this.houses) {
    //         //filter using cached data
    //         return this.findhouseObservable(id);
    //     } else {
    //         //Query the existing houses to find the target house
    //         return Observable.create((observer: Observer<IHouse>) => {
    //                 this.gethouses().subscribe((houses: IHouse[]) => {
    //                     this.houses = houses;                
    //                     const cust = this.filterhouses(id);
    //                     observer.next(cust);
    //                     observer.complete();
    //             })
    //         })
    //         .catch(this.handleError);
    //     }
    // }

    
    // newhouse(house: IHouse) : Observable<boolean> {
    //     return Observable.create((observer: Observer<boolean>) => {
    //         this.houses.push(house);
    //         this.http.get(this._baseUrl + 'houses.json')
    //                     .map((res: Response) => {
    //                         return this.houses;
    //                     })
    //                     .catch(this.handleError);
    //         observer.next(true);
    //         observer.complete();
    //     });
    // }
    
    // private findhouseObservable(id: number) : Observable<IHouse> {        
    //     return this.createObservable(this.filterhouses(id));
    // }
    
    // private filterhouses(id: number) : IHouse {
    //     const custs = this.houses.filter((cust) => cust.id === id);
    //     return (custs.length) ? custs[0] : null;
    // }
    
    // private createObservable(data: any) : Observable<any> {
    //     return Observable.create((observer: Observer<any>) => {
    //         observer.next(data);
    //         observer.complete();
    //     });
    // }
    
    
    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
