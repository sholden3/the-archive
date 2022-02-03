import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { MaterialModule } from '../modules/material/material.module';
import { UiElementsModule } from '../ui-elements/ui-elements.module';



@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    PortfolioRoutingModule,
    MaterialModule,
    UiElementsModule
  ]
})
export class PortfolioModule { }
