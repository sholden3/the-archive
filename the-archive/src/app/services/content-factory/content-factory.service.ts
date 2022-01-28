import { ComponentFactoryResolver, Injectable, Type, ViewContainerRef } from '@angular/core';
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
  }

  returnComponent(componentType: string): Type<any> {
    return this.cmps.get(componentType)!;
  }

  resolveComponent(component: Type<any>, viewContainerRef: ViewContainerRef, data: any[]) {
    const entityComp = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = viewContainerRef.createComponent(entityComp);
    componentRef.instance.data = {componentRef: componentRef, containerRef: viewContainerRef, data: data};
  }
}
