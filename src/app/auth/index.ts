import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoadingContainer } from '../shared/components/loading-container';

import { SignInComponent } from './components/sign-in';
import { AuthGuard } from './guards/auth-guard';
import { TitlePageService } from './services/title-page.service';
import { AuthService } from './services/auth-service';
import { UnauthGuard } from './guards/unauth-guard';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { sharedModule }       from '../shared';

import { authRoutes }       from './authRoutes';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    authRoutes,
    FormsModule,
    sharedModule
  ],
  providers: [
    TitlePageService,
    AuthGuard,
    AuthService,
    UnauthGuard,
    ToastsManager
  ]
})

export class AuthModule {}


export { AuthGuard };
export { AuthService };
export { UnauthGuard };
export {TitlePageService};