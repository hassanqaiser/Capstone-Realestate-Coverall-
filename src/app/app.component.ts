/// <reference path="../../typings/globals/jquery/index.d.ts" />
import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { TitlePageService } from './auth';

import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar/toolbar';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

declare var $: JQueryStatic;

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    // styleUrls:['app.component.css'],
    directives: [ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_TOOLBAR_DIRECTIVES]
})

export class AppComponent implements OnInit {

    data: any;
    user = {};

    public userName: string;
    public userEmail: string;
    public photoUrl: string;
    title: any;
    constructor(private _titlePageService: TitlePageService, private _router: Router, public af: AngularFire) { 
        $(document).ready(function () {
          var trigger = $('.hamburger'),
              overlay = $('.overlay'),
             isClosed = false;
        
            trigger.click(function () {
              hamburger_cross();      
            });
        
            function hamburger_cross() {
        
              if (isClosed == true) {          
                overlay.hide();
                trigger.removeClass('is-open');
                trigger.addClass('is-closed');
                isClosed = false;
              } else {   
                overlay.show();
                trigger.removeClass('is-closed');
                trigger.addClass('is-open');
                isClosed = true;
              }
          }
          
          $('[data-toggle="offcanvas"]').click(function () {
                $('#wrapper').toggleClass('toggled');
          });
          
          $('#hlink').click(function () {
                $('#wrapper').toggleClass('toggled');
          });
        });
    }
    signOut() {
        this.af.auth.logout();
        this._router.navigate(['/signin']);
    }

    ngOnInit() {
        this._titlePageService.setTitle('Houses');

        setInterval(() => {
            this.title = this._titlePageService.getTitle();
        }, 1000);

    }
}
