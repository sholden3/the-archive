import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from '../content-wrapper/main-content/main-content.component';

const routes: Routes = [
  {path: '', component: CoursesComponent},
  {path: ':id', component: MainContentComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoursesRoutingModule { }
