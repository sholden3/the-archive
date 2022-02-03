import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { MainContentComponent } from '../content-wrapper/main-content/main-content.component';

const routes: Routes = [
  {path: '', component: PortfolioComponent},
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
export class PortfolioRoutingModule { }
