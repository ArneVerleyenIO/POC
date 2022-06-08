import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/models/project.model';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-project-footer',
  templateUrl: './project-footer.component.html',
  styleUrls: ['./project-footer.component.scss']
})
export class ProjectFooterComponent implements OnInit {

  // projects: Project[] = [];

  // constructor(
  //   private apiService: ApiService,
  // ) { }

  ngOnInit(): void {
    // this.getRandProjects();
  }

  // getRandProjects () {
  //   this.apiService.getRandomProjects()
  //   .subscribe(
  //     response => {
  //       this.projects = response;
  //     }
  //   )
  // }
}
