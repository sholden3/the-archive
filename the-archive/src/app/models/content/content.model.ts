import { Type } from "@angular/core";

export class Content {
    public component;
    public data;
    public children;

    constructor(component: Type<any>, data: any, children: Content[]) {
        this.component = component;
        this.data = data;
        this.children = children;
    }
}
