import { Component, OnInit, Input } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';


import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar/toolbar';

import { TitlePageService } from '../../auth';
import { AngularFire, AuthProviders } from 'angularfire2';


@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
    directives: [ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_TOOLBAR_DIRECTIVES]
})

export class HomeIndexComponent implements OnInit {

    data: any;
    user = {};

    public userName: string;
    public userEmail: string;
    public photoUrl: string;
    title: any;
    constructor(private _titlePageService: TitlePageService, private _router: Router, public af: AngularFire) { }
    onSignOut() {
        this.af.auth.logout();
        this._router.navigate(['']);
    }



    ngOnInit() {
        this._titlePageService.setTitle('Home');

        setInterval(() => {
            this.title = this._titlePageService.getTitle();
        }, 1000);

        this.af.auth.subscribe(user => {
          if(user) {
            // user logged in
            this.user = user;
            this.userName = user.auth.displayName;
            this.userEmail = user.auth.email;
            this.photoUrl = user.auth.photoURL;
          }
          else {
            // user not logged in
            this._router.navigate(['']);
            this.user = {};
          }
        });

        if (this.user) {

        }
        else {
            console.log("this user doesn't exit");
        }
    }
}
