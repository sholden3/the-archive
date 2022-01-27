import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const SMALL_WIDTH_BREAKPOINT = 720;

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {

  constructor(private breakpointObserver: BreakpointObserver) { 
  }

  checkScreenSize(): Observable<BreakpointState> {
    return this.breakpointObserver
      .observe([
        `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`
      ])
  }
}
