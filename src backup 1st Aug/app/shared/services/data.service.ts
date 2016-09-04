import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subject } from 'rxjs/Subject';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { IHouse } from '../interfaces';

@Injectable()
export class DataService {
  
    _baseUrl: string = '';
    houses: FirebaseListObservable<IHouse[]>;
    idSubject: Subject<any>;
    constructor(af: AngularFire) {
        this.houses = af.database.list('/Houses', {
          query: {
            orderByChild: 'id',
            equalTo: 3
          }
        });


         const databaseRef = firebase.database().ref().child('Houses');
         const querybaseRef = querybase.ref(databaseRef, ['id']);
     }


    gethouses() {
        return this.houses;

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
