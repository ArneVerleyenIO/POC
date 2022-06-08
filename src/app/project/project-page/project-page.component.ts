import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { Project } from '../../shared/models/project.model';
import { StoryblokService } from '../../shared/services/storyblok.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  project: Project = {
    name: '',
    id: 0,
    date: '',
    slug: '',
    full_slug: '',
    content: {
      project_type: '',
      title: '',
      description: {
        content: [
          {
            content: [
              {
                text: ''
              }
            ]
          }
        ],
        type: ''
      },
      industry: '',
      framework: '',
      image: '',
      image_body_1: '',
      image_body_2: '',
      githubLink: '',
      code: '',
      price_range: ''
    }
  };
  title: String = '';
  picture: String = '';
  industry: String = '';

  pictureBody1: string = '';
  pictureBody2: string = '';
  description: string = '';
  code: string = '';
  githubLink: string = '';

  priceRange: string = '';

  constructor(
    private route: ActivatedRoute,
    // private apiService: ApiService,
    private storyblokService: StoryblokService,
  ) { }

  ngOnInit(): void {
    this.loadProject();
  }

  loadProject () {
    this.route.params
    .subscribe(
      params => {
        const id = params['id'];
        this.storyblokService.getProject(id)
        .then(
          response => {
            this.project = response.story;
            console.log(this.project)
          }
        );
      }
    );
  }
}
