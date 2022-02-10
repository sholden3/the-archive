import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private _dropTargetIds: BehaviorSubject<string[]>;
  private _demoData: BehaviorSubject<TreeNode[]>;
  testNode: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  private dataStore: {
    dropTargetIds: string[]
  };

  constructor(private http: HttpClient) { 
    this._dropTargetIds = new BehaviorSubject<string[]>([]);
    this._demoData = new BehaviorSubject<TreeNode[]>([]);
    this.dataStore = { dropTargetIds: [] };
  }
  get dropTargetIds(): Observable<string[]> {
    return this._dropTargetIds.asObservable();
  }
  addNewId(idToAdd: string) {
    this.ids.push(idToAdd);
    this._dropTargetIds.next(this.ids);
  }

  get demoData(): Observable<TreeNode[]> {
    return this._demoData.asObservable();
  }
  addNewNode(nodeToAdd: TreeNode) {
    this.nodeData.push(nodeToAdd);
    this._demoData.next(this.nodeData);
  }

  ids: string[] = [];
  componentsToAdd: any[] = [];
  nodeData: TreeNode[] = [];
}

interface TreeNode {
  id: string;
  children: TreeNode[];
  component: any;
  data: any;
  isExpanded?: boolean;
}
