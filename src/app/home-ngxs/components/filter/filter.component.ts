import { Component, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() industryId = new EventEmitter();
  @Output() projectTypeId = new EventEmitter();
  @Output() frameworkId = new EventEmitter();

  industries: any = [];
  projectTypes: any = [];
  frameworks: any = [];

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {

    this.apiService.getCategories()
    .subscribe(
      response => {
        for (let i = 0; i < response.industry.length; i++) {
          this.industries.push({
            id: response.industry[i][0],
            label: response.industry[i][1],
            name: i
          });
        }
        for (let i = 0; i < response.framework.length; i++) {
          this.frameworks.push({
            id: response.framework[i][0],
            label: response.framework[i][1],
            name: i
          });
        }
        for (let i = 0; i < response.project_type.length; i++) {
          this.projectTypes.push({
            id: response.project_type[i][0],
            label: response.project_type[i][1],
            name: i
          });
        }
      }
    );
  }

  // checks which box is checked and unchecks previously checked boxes

  checkIndustries (id: string) {
    this.industries.forEach((industry: { id: string }) => {
      const industryCheckbox = <HTMLInputElement>document.getElementById(industry.id);
      if (industryCheckbox.checked && industryCheckbox.id !== id) {
        industryCheckbox.checked = false;
      }
      else if (industryCheckbox.checked && industryCheckbox.id === id) {
        this.industryId.emit(id);
      }
      else if (!industryCheckbox.checked && industryCheckbox.id === id) {
        this.industryId.emit('');
      };
    });
  }

  checkProjectTypes (id: string) {
    this.projectTypes.forEach((projectType: { id: string }) => {
      const projectTypeCheckbox = <HTMLInputElement>document.getElementById(projectType.id);
      if (projectTypeCheckbox.checked && projectTypeCheckbox.id !== id) {
        projectTypeCheckbox.checked = false;
      }
      else if (projectTypeCheckbox.checked && projectTypeCheckbox.id === id) {
        this.projectTypeId.emit(id);
      }
      else if (!projectTypeCheckbox.checked && projectTypeCheckbox.id === id) {
        this.projectTypeId.emit('');
      };
    });
  }

  checkFrameworks (id: string) {
    this.frameworks.forEach((framework: { id: string }) => {
      const frameworkCheckbox = <HTMLInputElement>document.getElementById(framework.id);
      if (frameworkCheckbox.checked && frameworkCheckbox.id !== id) {
        frameworkCheckbox.checked = false;
      }
      else if (frameworkCheckbox.checked && frameworkCheckbox.id === id) {
        this.frameworkId.emit(id);
      }
      else if (!frameworkCheckbox.checked && frameworkCheckbox.id === id) {
        this.frameworkId.emit('');
      };
    });
  }
}


