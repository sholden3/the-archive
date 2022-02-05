import { ApplicationRef, Compiler, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector, Type, ViewContainerRef } from '@angular/core';
import { CodeEditorComponent } from 'src/app/ui-elements/advance-elements/code-editor/code-editor.component';
import { HeaderH1Component } from 'src/app/ui-elements/basic-elements/header-h1/header-h1.component';
import { HeaderH2Component } from 'src/app/ui-elements/basic-elements/header-h2/header-h2.component';
import { HeaderH3Component } from 'src/app/ui-elements/basic-elements/header-h3/header-h3.component';
import { ListComponent } from 'src/app/ui-elements/basic-elements/list/list.component';
import { ParagraphComponent } from 'src/app/ui-elements/basic-elements/paragraph/paragraph.component';
import { FlexContainerComponent } from 'src/app/ui-elements/containers/flex-container/flex-container.component';
import { DragDropComponent } from 'src/app/ui-elements/side-nav/drag-drop/drag-drop.component';
import { DropdownLinksComponent } from 'src/app/ui-elements/side-nav/dropdown-links/dropdown-links.component';
import { ListContainerComponent } from 'src/app/ui-elements/side-nav/list-container/list-container.component';
import { SingleLinkComponent } from 'src/app/ui-elements/side-nav/single-link/single-link.component';
import { UiElementsModule } from 'src/app/ui-elements/ui-elements.module';

@Injectable({
  providedIn: 'root'
})
export class ContentFactoryService {

  cmps: Map<string, Type<any>> = new Map();

  constructor(
      private componentFactoryResolver: ComponentFactoryResolver,
      private appRef: ApplicationRef,
      private compiler: Compiler,
      private injector: Injector
    ) { 
      this.cmps.set('container-flex', FlexContainerComponent);
      this.cmps.set('paragraph', ParagraphComponent);
      this.cmps.set('code-editor', CodeEditorComponent);
      this.cmps.set('h1', HeaderH1Component);
      this.cmps.set('h2', HeaderH2Component);
      this.cmps.set('h3', HeaderH3Component);
      this.cmps.set('list', ListComponent);
      this.cmps.set('single-link', SingleLinkComponent);
      this.cmps.set('dropdown-links', DropdownLinksComponent);
      this.cmps.set('nav-list', ListContainerComponent);
      this.cmps.set('drag-drop', DragDropComponent);
  }

  returnComponent(componentType: string): Type<any> {
    return this.cmps.get(componentType)!;
  }

  resolveComponent(content: any, component: Type<any>, viewContainerRef: ViewContainerRef, data: any[]) {
    const ngModuleFactory = this.compiler.compileModuleSync(UiElementsModule);
    const ngModule = ngModuleFactory.create(viewContainerRef.injector);
    const factory =ngModule.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = viewContainerRef.createComponent(factory);
    console.log(viewContainerRef);
    componentRef.instance.data = content;
    // const entityComp = this.componentFactoryResolver.resolveComponentFactory(component);
    // console.log(entityComp);
    // const componentRef = viewContainerRef.createComponent(entityComp);
    // console.log(componentRef);
    // componentRef.instance.data = content
  }

  resolveComponentForTesting(component: Type<any>, viewContainerRef: ViewContainerRef, node: any, index: number) {
    const ngModuleFactory = this.compiler.compileModuleSync(UiElementsModule);
    const ngModule = ngModuleFactory.create(viewContainerRef.injector);
    const factory = ngModule.componentFactoryResolver.resolveComponentFactory(component);
    console.log(factory);
    //const componentRef = factory.create(this.injector, [], node);
    const componentRef = factory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);

   const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    return domElem;
    // console.log(domElem);

    // node.nativeElement.appendChildNode(domElem);

    //const componentRef = viewContainerRef.createComponent(factory, index);
    // const entityComp = this.componentFactoryResolver.resolveComponentFactory(component);
    // const componentRef = viewContainerRef.createComponent(entityComp);
    // const componentRef = viewContainerRef.createComponent(entityComp);
    // console.log(componentRef);
    // componentRef.instance.data = content
  }
}
