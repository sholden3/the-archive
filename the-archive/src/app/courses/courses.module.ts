import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CoursesRoutingModule,
    ComponentsModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
