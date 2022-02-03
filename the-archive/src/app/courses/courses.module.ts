import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavContentComponent } from './side-nav-content/side-nav-content.component';
import { CoursesComponent } from './courses.component';



@NgModule({
  declarations: [
    SideNavContentComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
