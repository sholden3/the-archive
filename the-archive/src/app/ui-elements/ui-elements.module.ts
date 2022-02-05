import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexContainerComponent } from './containers/flex-container/flex-container.component';
import { MaterialModule } from '../modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerDirective } from './Directives/Container/container.directive';
import { ParagraphComponent } from './basic-elements/paragraph/paragraph.component';
import { CodeEditorComponent } from './advance-elements/code-editor/code-editor.component';
import { HighlightModule } from 'ngx-highlightjs';
import { HeaderH1Component } from './basic-elements/header-h1/header-h1.component';
import { HeaderH2Component } from './basic-elements/header-h2/header-h2.component';
import { HeaderH3Component } from './basic-elements/header-h3/header-h3.component';
import { ListComponent } from './basic-elements/list/list.component';
import { SingleLinkComponent } from './side-nav/single-link/single-link.component';
import { RouterModule } from '@angular/router';
import { DropdownLinksComponent } from './side-nav/dropdown-links/dropdown-links.component';
import { ListContainerComponent } from './side-nav/list-container/list-container.component';
import { OverlayModule } from "@angular/cdk/overlay";
import { DialogDirective } from './Directives/dialog/dialog.directive';
import { DialogContainerComponent } from './dialog/dialog-container/dialog-container.component';
import { DragDropComponent } from './side-nav/drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    FlexContainerComponent,
    ContainerDirective,
    ParagraphComponent,
    CodeEditorComponent,
    HeaderH1Component,
    HeaderH2Component,
    HeaderH3Component,
    ListComponent,
    SingleLinkComponent,
    DropdownLinksComponent,
    ListContainerComponent,
    DialogDirective,
    DialogContainerComponent,
    DragDropComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HighlightModule,
    ReactiveFormsModule,
    RouterModule,
    DragDropModule,
    OverlayModule
  ],
  exports: [
    FlexContainerComponent,
    ListContainerComponent
  ]
})
export class UiElementsModule { }
