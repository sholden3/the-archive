import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OktaAuthGuard } from '@okta/okta-angular';
import { UiBuilderComponent } from './ui-builder.component';
import { SiteManagerComponent } from './site-manager/site-manager.component';
import { MainContentComponent } from '../content-wrapper/main-content/main-content.component';

const routes: Routes = [
  {path: '', component: UiBuilderComponent},
  {path: ':id', component: MainContentComponent}
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
