import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentWrapperComponent } from '../content-wrapper/content-wrapper.component';
import { SiteManagerComponent } from './site-manager/site-manager.component';
import { OktaAuthGuard } from '@okta/okta-angular';
import { UiBuilderComponent } from './ui-builder.component';

const routes: Routes = [
  {path: '', component: UiBuilderComponent, canActivate: [ OktaAuthGuard ]},
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
