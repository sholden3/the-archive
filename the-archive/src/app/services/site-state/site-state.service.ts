import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteStateService {

  private state: BehaviorSubject<string>;

  constructor() { 
    this.state = new BehaviorSubject<string>('');
  }

  setState(state: string) {
    this.state.next(state);
  }

  getState(): Observable<string> {
    return this.state.asObservable();
  }
}
