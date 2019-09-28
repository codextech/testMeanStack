import { Routes } from '@angular/router';
import { LoginComponent } from 'src/app/auth/login/login.component';

export const AUTH_LAYOUTS_ROUTES: Routes = [
  // { path: 'testProject/admin', component: UserDashBoardComponent },

  {path: 'login', component: LoginComponent},
];
