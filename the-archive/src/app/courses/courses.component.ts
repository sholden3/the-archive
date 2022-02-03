import { Component, OnInit } from '@angular/core';
import { SiteStateService } from '../services/site-state/site-state.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private siteState: SiteStateService) { }

  ngOnInit(): void {
    this.siteState.setState("courses");
  }

}
