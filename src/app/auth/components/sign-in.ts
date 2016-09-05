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

    <form class="form-horizontal" (ngSubmit)="onSubmit()">
            <div class="form-group">
                <img class="login__img" src="assets/img/C.png" alt="Coverall">
            </div>
            <div class="form-group label-floating">

                <div class="col-md-10">
                    <input [(ngModel)]="email" type="email" class="form-control" id="email" 
                    name="email_" #email_="ngModel"  placeholder="Email" required>
                     <div class="alert alert-danger" [hidden]="email_.valid">Email is required</div>
                </div>
                
            </div>
            <div class="form-group label-floating">

                <div class="col-md-10">
                    <input [(ngModel)]="password" type="password" class="form-control" 
                    id="password" name="pwd" #pwd="ngModel" placeholder="Password" required>
                     <div class="alert alert-danger" [hidden]="pwd.valid">Password is required</div>
                </div>
                
            </div>

            <div class="form-group">

                <div class="col-md-10">
                    <button class="btn-lg .btn-block .btn-raised" type="submit">Sign In</button>
                </div>
                
            </div>

            

            <div class="hr-with-words"><span>or</span></div><br>
            
            <div class="form-group">

                <div class="col-md-10">
                    <button class="btn-lg .btn-block .btn-raised" (click)="signInWithGithub()">
                        <img class="sign-in_img" src="/assets/img/github_login.png" alt="Google icon" title="Google icon">
                        Use My GitHub Account
                    </button>
                </div>
                
            </div>
            <div class="form-group">

                <div class="col-md-10">         
                    <button class="btn-lg .btn-block .btn-raised" (click)="signInWithGoogle()">
                        <img class="sign-in_img" src="/assets/img/google-login.png" alt="Google icon" title="Google icon">
                        Use My Google Account
                    </button>
                </div>
                
            </div>
            <div class="form-group">

                <div class="col-md-10">  
                    <button class="btn-lg .btn-block .btn-raised" (click)="signInWithTwitter()">
                        <img class="sign-in_img" src="/assets/img/twitter_login.jpg" alt="Google icon" title="Google icon">
                        Use My Twitter Account
                    </button>
                </div>
                
            </div>
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
