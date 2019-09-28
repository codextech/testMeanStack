import { Routes } from '@angular/router';
import { DashbaordComponent } from 'src/app/dashboard/dashbaord.component';

export const DASHBOARD_LAYOUTS_ROUTES: Routes = [

   { path: 'testProject', component: DashbaordComponent },

 /*  {
    path: 'dashboard',
    children: [
      {
        // path: 'posts',
        // component: HomePageComponent
      },
      {
        // path: 'post/:name',
        // component: HomePageComponent
      },
      {
        // path: 'delete',
        // component: HomePageComponent
      }
    ]
  } */
];
