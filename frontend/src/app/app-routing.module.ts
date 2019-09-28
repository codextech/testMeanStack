import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingLayoutComponent } from './layout/landing-layout/landing-layout.component';
import { LANDING_LAYOUTS_ROUTES } from './layout/landing-layout/landingLayout.routes';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { DASHBOARD_LAYOUTS_ROUTES } from './layout/dashboard-layout/dashboardLayout.routes';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { AUTH_LAYOUTS_ROUTES } from './layout/auth-layout/authLayout.routes';
import { AuthGuard } from './_gaurds/auth.gaurd';


const routes: Routes = [

  {path: '', component: LandingLayoutComponent,
  children: LANDING_LAYOUTS_ROUTES
  },

 {path: '', component: DashboardLayoutComponent,
  children: DASHBOARD_LAYOUTS_ROUTES
 },

 {path: '', component: AuthLayoutComponent,
 children: AUTH_LAYOUTS_ROUTES
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
