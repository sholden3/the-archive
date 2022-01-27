import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DirectoryItem } from 'src/app/models/directory-item/directory-item.model';
import { DirectorySubItem } from 'src/app/models/directory-sub-item/directory-sub-item.model';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {

  private _directory: BehaviorSubject<DirectoryItem[]>;

  private dataStore: {
    directory: DirectoryItem[]
  }

  constructor() { 
    this.dataStore = { directory: [] };
    this._directory = new BehaviorSubject<DirectoryItem[]>([]);
  }

  get directory(): Observable<DirectoryItem[]> {
    return this._directory.asObservable();
  }

  loadAll() {
    const source = of(this.directory_items);
    return source.subscribe(data => {
      this.dataStore.directory = data;
      this._directory.next(Object.assign({}, this.dataStore).directory);
    }, error => {
      console.log("Error: ", error);
    });
  }

  private directory_items = [
    new DirectoryItem(
      "41asdr",
      "About Me",
      "Just a little about me",
      "text",
      []
    ),
    new DirectoryItem(
      "3154dfs",
      "About the Site",
      "Just a little about the site",
      "text",
      []
    ),
    new DirectoryItem(
      "24fejha",
      "Intro to CS",
      "Starting point to your journey into CS",
      "dropdown",
      [
        new DirectorySubItem(
          "24fejha",
          "fac3456",
          "Foreword",
          "A quick foreword before we begin our journey"
        ),
        new DirectorySubItem(
          "24fejha",
          "gdfg67f",
          "Intro to CS and Computers",
          "A generalized and quick/dirty intro to CS"
        )
      ]
    )
  ];

}