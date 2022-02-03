import { BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Content } from 'src/app/models/content/content.model';
import { ContentService } from 'src/app/services/content/content.service';
import { ScreenSizeService } from 'src/app/services/screen-size/screen-size.service';
import { TestService } from 'src/app/services/test/test.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  public isScreenSmall: boolean | null;
  prevNode: any;
  nextNode: any;

  constructor(
    private screenSizeService: ScreenSizeService,
    private contentService: ContentService
  ) { 
    this.isScreenSmall = null;
    this.prevNode = null
    this.nextNode = null;
  }

  ngOnInit(): void {
    this.screenSizeService.checkScreenSize()
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });
  }

}
