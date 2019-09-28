import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';





export const LANDING_LAYOUTS_ROUTES: Routes = [

   { path: 'testProject/guest', component: HomeComponent },

   { path: '', pathMatch: 'full', redirectTo: '/testProject/guest' },
];
