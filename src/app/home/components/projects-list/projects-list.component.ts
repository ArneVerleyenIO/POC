import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Project } from 'src/app/shared/models/project.model'

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  // projects: Project[] = [];
  // p: number = 1;
  // selectedOption: string = 'asc';

  @Input() industryId: string = '';
  @Input() projectTypeId: string = '';
  @Input() frameworkId: string = '';

  // options = [
  //   {
  //     name: 'Most Recent',
  //     value: 'desc'
  //   },
  //   {
  //     name: 'Oldest',
  //     value: 'asc'
  //   }
  // ];

  // constructor(
  //   private apiService: ApiService
  // ) { }

  // loadMore() {

  //   this.p = ++this.p;
  //   this.apiService.getProjects( this.selectedOption, this.p, this.frameworkId, this.industryId, this.projectTypeId)
  //   .subscribe(
  //     response => {
  //       response.forEach((project: Project) => {
  //         // this.projects.push(project);
  //         this.projects = [...this.projects,project];
  //       });
  //     },
  //     err => {
  //       console.log(err);
  //       console.log('No more pages to load');
  //     }
  //   );
  // }

  ngOnInit(): void {
  //   console.log(this.selectedOption);
  //   this.apiService.getProjects(this.selectedOption, this.p, this.frameworkId, this.industryId, this.projectTypeId)
  //   .subscribe(
  //     response => {
  //       this.projects = response;
  //     }
  //   );
  }

  // ngOnChanges () {
  //   this.apiService.getProjects(this.selectedOption, this.p, this.frameworkId, this.industryId, this.projectTypeId)
  //   .subscribe(
  //     response => {
  //       this.projects = response;
  //     }
  //   );
  // }

  // handleSortBy () {
  //   this.apiService.getProjects(this.selectedOption, this.p, this.frameworkId, this.industryId, this.projectTypeId)
  //   .subscribe(
  //     response => {
  //       this.projects = response;
  //     }
  //   );

  // }
}
