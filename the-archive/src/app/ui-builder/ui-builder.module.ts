import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteManagerComponent } from './site-manager/site-manager.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../modules/material/material.module';
import { UiBuilderComponent } from './ui-builder.component';
import { UiBuilderRoutingModule } from './ui-builder-routing.module';



@NgModule({
  declarations: [
    SiteManagerComponent,
    UiBuilderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    UiBuilderRoutingModule
  ],
  exports: [
    UiBuilderComponent
  ]
})
export class UiBuilderModule { }
