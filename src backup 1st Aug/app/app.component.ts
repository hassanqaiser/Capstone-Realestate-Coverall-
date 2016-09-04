import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { TitlePageService } from './auth';

import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar/toolbar';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls:['app.component.css'],
    directives: [ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_TOOLBAR_DIRECTIVES]
})

export class AppComponent implements OnInit {

    data: any;
    user = {};

    public userName: string;
    public userEmail: string;
    public photoUrl: string;
    title: any;
    constructor(private _titlePageService: TitlePageService, private _router: Router) { }
    onSignOut() {

    }

    ngOnInit() {
        this._titlePageService.setTitle('Houses');

        setInterval(() => {
            this.title = this._titlePageService.getTitle();
        }, 1000);

    }
}
