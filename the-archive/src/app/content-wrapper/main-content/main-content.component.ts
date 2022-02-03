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
  id: string | null;
  prevNode: any;
  nextNode: any;

  content: Observable<Content[]> | null | undefined;
  contentItems: Content[];

  constructor(
    private screenSizeService: ScreenSizeService,
    private contentService: ContentService,
    private route: ActivatedRoute,
    private router: Router,
    private test: TestService
  ) { 
    this.isScreenSmall = null;
    this.content = null;
    this.contentItems = [];
    this.id = null;
    this.prevNode = null
    this.nextNode = null;
  }

  ngOnInit(): void {
    // Testing Controller functionality
    //this.test.getResource();

    this.screenSizeService.checkScreenSize()
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });

    this.content = this.contentService.content;

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      if(this.id) {
        try {
          this.contentService.loadAll(this.id);
        } catch (error) {
          this.router.navigate(['']);
        }
      } else {
        this.router.navigate(['/section/41asdr']);
      }
    });
    this.content.subscribe(data => {
      this.contentItems = data;
    })
  }

}
