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


@NgModule({
  declarations: [
    FlexContainerComponent,
    ContainerDirective,
    ParagraphComponent,
    CodeEditorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HighlightModule,
    ReactiveFormsModule
  ],
  exports: [
    FlexContainerComponent
  ]
})
export class UiElementsModule { }
