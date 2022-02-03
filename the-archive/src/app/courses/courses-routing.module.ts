import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'courses/:id', component: CoursesComponent},// MainContentComponent},
  {path: '', component: CoursesComponent}
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
