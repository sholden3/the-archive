import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MainContentComponent } from './main-content/main-content.component';



@NgModule({
  declarations: [
    SideNavComponent,
    ToolBarComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContentWrapperModule { }
