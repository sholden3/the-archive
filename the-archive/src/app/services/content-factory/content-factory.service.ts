import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentFactoryService {

  cmps: Map<string, Type<any>> = new Map();

  constructor() { 

  }

  returnComponent(componentType: string): Type<any> {
    return this.cmps.get(componentType)!;
  }
}
