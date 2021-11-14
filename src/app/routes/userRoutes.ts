import { Routes } from '@angular/router';
import { LoginComponent } from '../components/user/login/login.component';
import { ProfileComponent } from '../components/user/profile/profile.component';

export const userRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
