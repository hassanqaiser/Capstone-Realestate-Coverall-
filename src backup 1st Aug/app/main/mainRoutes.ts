import { Routes, RouterModule } from '@angular/router';

// import { HouseComponent } from './house/house-edit-details/house.component';
import { HouseNewComponent } from './house/house-create/houseNew.component';
import { HousesComponent } from './house/house-list/houses.component';
import { HouseComponent } from './house/house-edit-details/house.component';

export const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/houses' },
  { path: 'houses', component: HousesComponent},
  { path: 'houses/new', component: HouseNewComponent},
  { path: 'houses/:id', component: HouseComponent}
];

export const mainRoutes = RouterModule.forChild(routes);