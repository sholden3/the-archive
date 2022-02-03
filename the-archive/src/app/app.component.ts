import { Component, OnInit } from '@angular/core';
import { SiteStateService } from './services/site-state/site-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private stateService: SiteStateService) {

  }

  ngOnInit() {
    this.stateService.setState('portfolio');
    this.stateService.getState().subscribe(data => {
      console.log(data);
    })
  }

}
