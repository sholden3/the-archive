import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OktaAuthGuard } from '@okta/okta-angular';
import { UiBuilderComponent } from './ui-builder.component';

const routes: Routes = [
  
  {path: '', component: UiBuilderComponent, canActivate: [ OktaAuthGuard ], children: [
    {path: ':id', component: UiBuilderComponent},// MainContentComponent},
  ]},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UiBuilderRoutingModule { }
