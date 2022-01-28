import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appContainer]'
})
export class ContainerDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
