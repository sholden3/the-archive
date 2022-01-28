import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexContainerComponent } from './containers/flex-container/flex-container.component';
import { MaterialModule } from '../modules/material/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerDirective } from './Directives/Container/container.directive';
import { ParagraphComponent } from './basic-elements/paragraph/paragraph.component';



@NgModule({
  declarations: [
    FlexContainerComponent,
    ContainerDirective,
    ParagraphComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class UiElementsModule { }
