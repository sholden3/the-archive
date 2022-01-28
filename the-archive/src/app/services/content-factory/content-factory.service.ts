import { ComponentFactoryResolver, Injectable, Type, ViewContainerRef } from '@angular/core';
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
  }

  returnComponent(componentType: string): Type<any> {
    return this.cmps.get(componentType)!;
  }

  resolveComponent(component: Type<any>, viewContainerRef: ViewContainerRef, data: any[]) {
    console.log(component);
    console.log(viewContainerRef);
    console.log(data);
    const entityComp = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = viewContainerRef.createComponent(entityComp);
    componentRef.instance.data = {componentRef: componentRef, containerRef: viewContainerRef, data: data};
  }
}
