import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from '../components';
import { LoginComponent } from '../components/user/login/login.component';
import { userRoutes } from '../routes/userRoutes';

@NgModule({
  declarations: [ProfileComponent, LoginComponent],
  imports: [CommonModule, RouterModule.forChild(userRoutes), FormsModule],
})
export class UserModule {}
