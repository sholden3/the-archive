import { Component, OnInit } from '@angular/core';
import { SiteStateService } from '../services/site-state/site-state.service';

@Component({
  selector: 'app-ui-builder',
  templateUrl: './ui-builder.component.html',
  styleUrls: ['./ui-builder.component.scss']
})
export class UiBuilderComponent implements OnInit {

  constructor(private siteState: SiteStateService) { }

  ngOnInit(): void {
    this.siteState.setState("dashboard");
  }

}
