import { ComponentFactoryResolver, Injectable, Type, ViewContainerRef } from '@angular/core';
import { CodeEditorComponent } from 'src/app/ui-elements/advance-elements/code-editor/code-editor.component';
import { HeaderH1Component } from 'src/app/ui-elements/basic-elements/header-h1/header-h1.component';
import { HeaderH2Component } from 'src/app/ui-elements/basic-elements/header-h2/header-h2.component';
import { HeaderH3Component } from 'src/app/ui-elements/basic-elements/header-h3/header-h3.component';
import { ParagraphComponent } from 'src/app/ui-elements/basic-elements/paragraph/paragraph.component';
import { FlexContainerComponent } from 'src/app/ui-elements/containers/flex-container/flex-container.component';

@Injectable({
  providedIn: 'root'
})
export class ContentFactoryService {

  cmps: Map<string, Type<any>> = new Map();

  constructor(
      private componentFactoryResolver: ComponentFactoryResolver
    ) { 
      this.cmps.set('container-flex', FlexContainerComponent);
      this.cmps.set('paragraph', ParagraphComponent);
      this.cmps.set('code-editor', CodeEditorComponent);
      this.cmps.set('h1', HeaderH1Component);
      this.cmps.set('h2', HeaderH2Component);
      this.cmps.set('h3', HeaderH3Component);
  }

  returnComponent(componentType: string): Type<any> {
    return this.cmps.get(componentType)!;
  }

  resolveComponent(content: any, component: Type<any>, viewContainerRef: ViewContainerRef, data: any[]) {
    const entityComp = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = viewContainerRef.createComponent(entityComp);
    componentRef.instance.data = content
  }
}
