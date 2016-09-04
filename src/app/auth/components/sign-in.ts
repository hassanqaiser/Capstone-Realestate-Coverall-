import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AngularFire } from 'angularfire2';
import { TitlePageService } from '../services/title-page.service';

import { LoadingContainer } from '../../shared/components/loading-container';

@Component({
  styleUrls: ['sign-in.css'],
  directives: [LoadingContainer],
  template: `
    <div class="login">
    <loading-container [loading]="isRunning">
    <form style="margin:auto;" (ngSubmit)="onSubmit()">
        <md-card>
            <img class="login__img" src="assets/img/C.png" alt="Clamarque">
            <md-input [(ngModel)]="email" name="email" type="email" placeholder="Email" required></md-input>
            <md-input [(ngModel)]="password" name="password" type="password" placeholder="Password" required></md-input>
            <button class="sign-in__button" md-raised-button type="submit">Sign In</button>
            <div class="login__error">{{msg}}</div>

            <div class="hr-with-words"><span>or</span></div>
            <br>
            <button class="sign-in__button" md-raised-button (click)="signInWithGithub()">
                <img class="sign-in_img" src="/assets/img/google-login.png" alt="Google icon" title="Google icon">
                Use My GitHub Account
            </button>
            <button class="sign-in__button" md-raised-button (click)="signInWithGoogle()">
                <img class="sign-in_img" src="/assets/img/google-login.png" alt="Google icon" title="Google icon">
                Use My Google Account
            </button>
            <button class="sign-in__button" md-raised-button (click)="signInWithTwitter()">
                <img class="sign-in_img" src="/assets/img/google-login.png" alt="Google icon" title="Google icon">
                Use My Twitter Account
            </button>
            
        </md-card>
    </form>
    </loading-container>
</div>
  `
})

export class SignInComponent implements OnInit {
  email: string;
  password: string;
  isRunning: boolean = false;
  delay: number = 0;

  constructor(private _titlePageService: TitlePageService, 
  private auth: AuthService, private router: Router, private _toastr: ToastsManager, public af: AngularFire) {
    this.af.auth.subscribe(user => {
        if(user) {
            this.postSignIn();
        }
    });
  }

  onSubmit() {
      if (this.email !== '' && this.password !== '') {
          this.isRunning = true;
          this.auth.signInCredentials(this.email, this.password, (error: any) => {
              if (error) {
                  this._toastr.error(error, 'Oops !');
                  this.isRunning = false;
              }
              else {
                  this.postSignIn();
                  this._toastr.success(this.email, 'Welcome back');
              }
          })
      } else {
          this._toastr.error('Thank you to complete follow areas', 'Oops!')
      }
  }

  signInWithGithub(): void {
    this.auth.signInWithGithub()
      .then(() => this.postSignIn());
  }

  signInWithGoogle(): void {
    this.isRunning = true;
    this.auth.signInWithGoogle()
      .then(() => this.postSignIn());
  }

  signInWithTwitter(): void {
    this.auth.signInWithTwitter()
      .then(() => this.postSignIn());
  }

  private postSignIn(): void {
    this.isRunning = false;
    this.router.navigate(['/houses']);
  }

  ngOnInit() {
    this._titlePageService.setTitle('Sign In');
    this.email = '';
    this.password = '';
  }
}
