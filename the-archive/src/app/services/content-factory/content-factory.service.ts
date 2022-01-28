import { ComponentFactoryResolver, Injectable, Type, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentFactoryService {

  cmps: Map<string, Type<any>> = new Map();

  constructor(
      private componentFactoryResolver: ComponentFactoryResolver
    ) { 

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
