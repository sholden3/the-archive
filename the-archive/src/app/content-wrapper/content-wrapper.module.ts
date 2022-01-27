import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ContentWrapperComponent } from './content-wrapper.component';



@NgModule({
  declarations: [
    SideNavComponent,
    ToolBarComponent,
    MainContentComponent,
    ContentWrapperComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContentWrapperModule { }
