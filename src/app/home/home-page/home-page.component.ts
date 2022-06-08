import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  industryId = '';
  projectTypeId = '';
  frameworkId = '';

  constructor() { }

  ngOnInit(): void {
  }

  receiveIndustryId ($event: string) {
    this.industryId = $event;
  }

  receiveProjectTypeId ($event: string) {
    this.projectTypeId = $event;
  }

  receiveFrameworkId ($event: string) {
    this.frameworkId = $event;
  }

}
