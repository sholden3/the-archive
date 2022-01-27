import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
}
