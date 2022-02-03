import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Courses } from 'src/app/mock-data/side-bar/courses';
import { Dashboard } from 'src/app/mock-data/side-bar/dashboard';
import { Portfolio } from 'src/app/mock-data/side-bar/portfolio';
import { Content } from 'src/app/models/content/content.model';
import { DirectoryItem } from 'src/app/models/directory-item/directory-item.model';
import { DirectorySubItem } from 'src/app/models/directory-sub-item/directory-sub-item.model';
import { ContentFactoryService } from '../content-factory/content-factory.service';
import { SiteStateService } from '../site-state/site-state.service';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {

  private _directory: BehaviorSubject<Content[]>;

  private dataStore: {
    directory: Content[]
  }

  constructor(
    private siteState: SiteStateService,
    private contentFactory: ContentFactoryService
  ) { 
    this.dataStore = { directory: [] };
    this._directory = new BehaviorSubject<Content[]>([]);
    this.siteState.getState().subscribe(
      (data) => {
        this.loadAll(data);
      }
    )
  }

  get directory(): Observable<Content[]> {
    return this._directory.asObservable();
  }

  loadAll(state: string) {
    const content = this.directory_items.find(i => i.state == state);
    const source = of(content!.nodes);
    return source.subscribe(data => {
      this.dataStore.directory = data;
      this._directory.next(Object.assign({}, this.dataStore).directory);
    }, error => {
      console.log("Error: ", error);
    });
  }

  private directory_items = [
    new Courses(this.contentFactory).data,
    new Portfolio(this.contentFactory).data,
    new Dashboard(this.contentFactory).data
  ]

  // private directory_items = [
  //   new DirectoryItem(
  //     "41asdr",
  //     "portfolio",
  //     "About Me",
  //     "Just a little about me",
  //     "text",
  //     []
  //   ),
  //   new DirectoryItem(
  //     "3154dfs",
  //     "portfolio",
  //     "About the Site",
  //     "Just a little about the site",
  //     "text",
  //     []
  //   ),
  //   new DirectoryItem(
  //     "24fejha",
  //     "courses",
  //     "Intro to CS",
  //     "Starting point to your journey into CS",
  //     "dropdown",
  //     [
  //       new DirectorySubItem(
  //         "24fejha",
  //         "fac3456",
  //         "Foreword",
  //         "A quick foreword before we begin our journey"
  //       ),
  //       new DirectorySubItem(
  //         "24fejha",
  //         "gdfg67f",
  //         "Intro to CS and Computers",
  //         "A generalized and quick/dirty intro to CS"
  //       )
  //     ]
  //   )
  // ];

}