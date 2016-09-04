import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './components/sign-in';

import { UnauthGuard } from './guards/unauth-guard';

export const routes: Routes = [
    {path: 'signin', component: SignInComponent, canActivate: [UnauthGuard]}
];

export const authRoutes = RouterModule.forChild(routes);