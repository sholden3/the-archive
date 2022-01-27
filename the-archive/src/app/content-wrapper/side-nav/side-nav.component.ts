import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  public isScreenSmall: boolean | null;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) { 
    this.isScreenSmall = null;
    this.sidenav = null;
  }

    @ViewChild(MatSidenav) sidenav: MatSidenav | null;

  ngOnInit(): void {
    this.breakpointObserver
      .observe([
        `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`
      ])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });

    this.router.events.subscribe(() => {
      if (this.isScreenSmall) {
        this.sidenav!.close();
      }
    })
  }

}
