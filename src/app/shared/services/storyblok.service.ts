import {
  Injectable,
} from '@angular/core';
import Client from 'storyblok-js-client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryblokService {
  private sbClient = new Client({
    accessToken: 'I9UUIW9PGzPHsnAVr8HYgwtt' // Add your token here
  });

  constructor(
	  private httpClient: HttpClient,
  ) {}

  private baseUrl = 'https://api.storyblok.com/v2/cdn/stories';
  private token = 'I9UUIW9PGzPHsnAVr8HYgwtt';

  getStory(slug: string, params ? : object): Promise < any > {
    return this.sbClient.getStory(slug, params)
    .then(res => res.data);
  }

  getStories(params ? : object): Promise < any > {
    return this.sbClient.getStories(params)
      .then(res => res.data);
  }

  getProjects(pagination: number, order: string, framework: string | null) : Promise <any> {
    const localSettings = localStorage.getItem('settings');
    let language = '';
    if (localSettings) {
      const settings = JSON.parse(localSettings);
      if (!settings.english) {
        language = 'nl';
      };
    };
    if (framework) {
      return this.sbClient.get('cdn/stories', {
        starts_with: 'projects',
        page: pagination,
        per_page: 12,
        sort_by: order,
        language: language,
        filter_query: {
          framework: {
            in: framework
          }
        },
      })
      .then(res => res.data)
    } else {
      return this.sbClient.get('cdn/stories', {
        starts_with: 'projects',
        page: pagination,
        per_page: 12,
        language: language,
        sort_by: order
      })
      .then(res => res.data)
    }
  }

  getProject(slug: string): Promise < any > {
    const localSettings = localStorage.getItem('settings');
    let language = '';
    if (localSettings) {
      const settings = JSON.parse(localSettings);
      if (!settings.english) {
        language = 'nl';
      };
    };
    return this.sbClient.get('cdn/stories/projects/'+slug, {
      language: language
    })
    .then(res => res.data);
  }

  // getProjectBySlug() : Promise <any> {
  //   return this.sbClient.get('cdn/stories', {
  //     starts_with: 'projects',
  //     sort_by: 'created_at:asc'
  //   })
  //   .then(res => res.data)
  // }

  // getProjects(): Observable < any > {
  //   return this.httpClient.get <any> (this.baseUrl 
	// 	+'/projects?token='+ this.token
	// 	+'&status=published'
  //   );
  // }
}
