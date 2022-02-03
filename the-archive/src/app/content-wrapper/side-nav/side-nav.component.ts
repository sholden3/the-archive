import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { startWith, tap, delay } from 'rxjs/operators';
import { Content } from 'src/app/models/content/content.model';
import { DirectoryItem } from 'src/app/models/directory-item/directory-item.model';
import { DirectoryService } from 'src/app/services/directory/directory.service';
import { ScreenSizeService } from 'src/app/services/screen-size/screen-size.service';
import { SiteStateService } from 'src/app/services/site-state/site-state.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, AfterViewChecked {

  public isScreenSmall: boolean | null;
  //public directory: Observable<DirectoryItem[]>;
  public directory: Content[];
  state: string = '';

  constructor(
    private router: Router,
    private screenSizeService: ScreenSizeService,
    private directoryService: DirectoryService,
    private stateService: SiteStateService,
    private changeDetector: ChangeDetectorRef,
  ) { 
    this.isScreenSmall = null;
    this.sidenav = null;
    //this.directory = new Observable<DirectoryItem[]>();
    this.directory = [];
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

    this.directoryService.directory.subscribe((data) => {
      this.directory = data;
    })
  }

  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }


}
