import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DirectoryItem } from 'src/app/models/directory-item/directory-item.model';
import { DirectoryService } from 'src/app/services/directory/directory.service';
import { ScreenSizeService } from 'src/app/services/screen-size/screen-size.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  public isScreenSmall: boolean | null;
  public directory: Observable<DirectoryItem[]>;

  constructor(
    private router: Router,
    private screenSizeService: ScreenSizeService,
    private directoryService: DirectoryService
  ) { 
    this.isScreenSmall = null;
    this.sidenav = null;
    this.directory = new Observable<DirectoryItem[]>();
  }

    @ViewChild(MatSidenav) sidenav: MatSidenav | null;

  ngOnInit(): void {
    this.screenSizeService.checkScreenSize()
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });

    this.router.events.subscribe(() => {
      if (this.isScreenSmall) {
        this.sidenav!.close();
      }
    });

    this.directory = this.directoryService.directory;
    this.directoryService.loadAll();

  }

}
