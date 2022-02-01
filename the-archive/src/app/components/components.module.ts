import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login/login.component';
import { LoginStatusComponent } from './login/login-status/login-status.component';
import { MaterialModule } from '../modules/material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    LoginStatusComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    LoginStatusComponent
  ]
})
export class ComponentsModule { }
