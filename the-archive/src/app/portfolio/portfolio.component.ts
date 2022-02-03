import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Content } from '../models/content/content.model';
import { ContentService } from '../services/content/content.service';
import { SiteStateService } from '../services/site-state/site-state.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  content: Observable<Content[]> | null | undefined;
  contentItems: Content[];

  id: string | null;

  constructor(
    private siteState: SiteStateService,
    private contentService: ContentService,
    private route: ActivatedRoute,
    private router: Router
    ) { 
    this.content = null;
    this.contentItems = [];
    this.id = null;
  }

  ngOnInit(): void {
    this.siteState.setState("portfolio");
    
    this.content = this.contentService.content;

    // this.route.params.subscribe((params: Params) => {
    //   console.log("In route");
    //   this.id = params['id'];
    //   console.log(this.id);
    //   if(this.id) {
    //     try {
          
    //       this.contentService.loadAll(this.id);
    //     } catch (error) {
    //       console.log(this.id);
    //       this.router.navigate(['']);
    //     }
    //   } else {
    //     this.router.navigate(['/section/41asdr']);
    //   }
    // });
    // this.content.subscribe(data => {
    //   this.contentItems = data;
    // })
  }

}
