import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SideNavComponent } from 'src/app/content-wrapper/side-nav/side-nav.component';
import { Content } from 'src/app/models/content/content.model';
import { ParagraphComponent } from 'src/app/ui-elements/basic-elements/paragraph/paragraph.component';
import { ContentFactoryService } from '../content-factory/content-factory.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private _content: BehaviorSubject<Content[]>;

  private dataStore: {
    content: Content[]
  };

  constructor(private contentFactory: ContentFactoryService) { 
    this.dataStore = { content: [] };
    this._content = new BehaviorSubject<Content[]>([]);
  }

  get content(): Observable<Content[]> {
    return this._content.asObservable();
  }

  loadAll(id: string) {
    const content = this.contentData.find(i => i.id == id);
    const source = of(content!.nodes);
    return source.subscribe(data => {
      this.dataStore.content = data;
      this._content.next(Object.assign({}, this.dataStore).content);
    }, error => {
      console.log("Error: ", error);
    });
  }

  private contentData = [
    {
      id: "41asdr",
      nodes: [
        new Content(
          this.contentFactory.returnComponent('container-flex'),
          {
            dir: "row",
            padding: 10,
            layout: "center",
            devMode: false
          },
          [
            new Content(
              this.contentFactory.returnComponent('h1'),
              {
                body: "About Me"
              },
              []
            )
          ]
        ),
        new Content(
          this.contentFactory.returnComponent('container-flex'),
          {
            dir: "row",
            padding: 10,
            layout: "center",
            devMode: false
          },
          [
            new Content(
              this.contentFactory.returnComponent('h1'),
              {
                body: "About Me"
              },
              []
            )
          ]
        )
      ]
    }
  ]
}
