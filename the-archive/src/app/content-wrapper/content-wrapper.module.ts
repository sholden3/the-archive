import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ContentWrapperComponent } from './content-wrapper.component';
import { MaterialModule } from '../modules/material/material.module';
import { ContentWrapperRoutingModule } from './content-wrapper-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { UiElementsModule } from '../ui-elements/ui-elements.module';
import { ComponentsModule } from '../components/components.module';
import { UiBuilderModule } from '../ui-builder/ui-builder.module';
import { PortfolioModule } from '../portfolio/portfolio.module';
import { CoursesModule } from '../courses/courses.module';



@NgModule({
  declarations: [
    SideNavComponent,
    ToolBarComponent,
    MainContentComponent,
    ContentWrapperComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ContentWrapperRoutingModule,
    FormsModule,
    FlexLayoutModule,
    UiElementsModule,
    ComponentsModule,
    UiBuilderModule,
    PortfolioModule,
    CoursesModule
  ]
})
export class ContentWrapperModule { }
