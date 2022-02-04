import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login/login.component';
import { LoginStatusComponent } from './login/login-status/login-status.component';
import { MaterialModule } from '../modules/material/material.module';
import { RouterModule } from '@angular/router';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { ChartDirective } from './charts/directives/chart.directive';



@NgModule({
  declarations: [
    LoginComponent,
    LoginStatusComponent,
    PieChartComponent,
    ChartDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    LoginStatusComponent,
    PieChartComponent
  ]
})
export class ComponentsModule { }
