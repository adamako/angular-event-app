import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from '../components';
import { userRoutes } from '../routes/userRoutes';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, RouterModule.forChild(userRoutes)],
})
export class UserModule {}
