import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ProjectModel } from '../shared/models/project.state.model';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { GetProjects } from '../shared/projects/projects.actions';
import { ProjectState } from '../shared/projects/projects.state';

@Component({
  selector: 'app-home-ngxs',
  templateUrl: './home-ngxs.component.html',
  styleUrls: ['./home-ngxs.component.scss']
})
export class HomeNgxsComponent implements OnInit {

  @Select(ProjectState.getProjectsList) projects$!: Observable<ProjectModel[]>

  industryId = '';
  projectTypeId = '';
  frameworkId = '';

  constructor(private store: Store) { }

  receiveIndustryId ($event: string) {
    this.industryId = $event;
  }

  receiveProjectTypeId ($event: string) {
    this.projectTypeId = $event;
  }

  receiveFrameworkId ($event: string) {
    this.frameworkId = $event;
  }

  ngOnInit(): void {
    this.store.dispatch(new GetProjects())
    .subscribe(response => console.log(this.projects$));
  }

}
