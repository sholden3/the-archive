import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SideNavComponent } from 'src/app/content-wrapper/side-nav/side-nav.component';
import { AboutMe } from 'src/app/mock-data/content/about-me';
import { AboutTheSite } from 'src/app/mock-data/content/about-the-site';
import { Foreword } from 'src/app/mock-data/content/intro-to-cs/foreword';
import { IntroToCsAndComputers } from 'src/app/mock-data/content/intro-to-cs/intro-to-cs-and-computers';
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
    new AboutMe(this.contentFactory).data,
    new AboutTheSite(this.contentFactory).data,
    new Foreword(this.contentFactory).data,
    new IntroToCsAndComputers(this.contentFactory).data
  ]
}
