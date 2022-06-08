import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjectModel } from '../models/project.state.model';
@Injectable()
export class ApiService {

  constructor (
      private httpClient: HttpClient,
    ) {
  }

  private baseUrl = environment.baseUrl;

  getProjects( orderBy: string, p: number, framework: string, industry: string, projectType: string): Observable<any> {
    const localSettings = localStorage.getItem('settings');
    let language = '';
    if (localSettings) {
      const settings = JSON.parse(localSettings);
      if (settings.english) {
        language = 'en';
      };
    };
    return this.httpClient.get<any>(this.baseUrl
      + '/project?per_page=12'
      + `&filter[orderby]=date&order=${orderBy}`
      + `&page=${p}`
      + `&framework=${framework}`
      + `&industry=${industry}`
      + `&project_type=${projectType}`
      + `&lang=${language}`
    );
  }

  getProjectById (id: string | null) {
    const localSettings = localStorage.getItem('settings');
    let language = '';
    if (localSettings) {
      const settings = JSON.parse(localSettings);
      if (settings.english) {
        language = 'en';
      };
    };
    return this.httpClient.get<any>(this.baseUrl
      + `/project/${id}`
      + `?lang=${language}`
    );
  }

  getRandomProjects() {
    const localSettings = localStorage.getItem('settings');
    let language = '';
    if (localSettings) {
      const settings = JSON.parse(localSettings);
      if (settings.english) {
        language = 'en';
      };
    };
    return this.httpClient.get<any>(this.baseUrl
      + '/project?orderby=rand&per_page=4'
      + `&lang=${language}`
    );
  }

  getCategories() {
    return this.httpClient.get<any>(this.baseUrl + '/acf');
  }

  getPages () {
    return this.httpClient.get<any>(this.baseUrl + '/pages');
  }

  getPage (id: string | null) {
    return this.httpClient.get<any>(this.baseUrl + `/pages/${id}`);
  }

}
