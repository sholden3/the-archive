import { Component, OnInit } from '@angular/core';
import { SiteStateService } from '../services/site-state/site-state.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(
    private siteState: SiteStateService
    ) { 
  }

  ngOnInit(): void {
    this.siteState.setState("portfolio");
  }

}
