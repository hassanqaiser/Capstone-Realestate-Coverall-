import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // {
    //     path: '', pathMatch: 'full',
    //     redirectTo: '/main'
    // },
    // { 
    //     path: 'houses/:id',
    //     loadChildren: 'app/houses/houses'
    // },
    {
        path: 'signin',
        component: 'auth.module#AuthModule'
    },
    // {
    //     path: 'main',
    //     component: 'main.module#mainModule'
    // },
      // catch any unfound routes and redirect to home page, other option
      // is to send the user to a 404 page
    // {
    //     path: '**', pathMatch: 'full', redirectTo: '/main'
    // }
];


export const AppRoutes = RouterModule.forRoot(routes);