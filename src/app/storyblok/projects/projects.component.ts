import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import {
  ApiService
} from 'src/app/shared/services/api.service';
import {
  Project
} from 'src/app/shared/models/project.model'
import {
  StoryblokService
} from '../../shared/services/storyblok.service';


@Component({
  selector: 'app-projects-list',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

	projects: Project[] = [];
	p: number = 1;
	selectedOption: string = 'created_at:asc';

	@Input() framework: string | null = null;

	// @Input() industryId: string = '';
	// @Input() projectTypeId: string = '';
	// @Input() frameworkId: string = '';

	options = [{
		name: 'Most Recent',
		value: 'created_at:desc'
		},
		{
		name: 'Oldest',
		value: 'created_at:asc'
		}
	];

	constructor(
		private apiService: ApiService,
		private storyblokService: StoryblokService,
	) {}

	loadMore() {
		this.p = ++this.p;
		this.storyblokService.getProjects(this.p, this.selectedOption, this.framework)
		.then(
			data => data.stories.forEach((project: Project) => {
			this.projects = [...this.projects, project];
			console.log(this.projects);
			})
		);
	}

	receiveFrameworkId($event: string) {
		this.framework = $event;
		this.storyblokService.getProjects(1, this.selectedOption, this.framework)
		.then(
			data => this.projects = data.stories,
			err => console.log(err)
		);
	}

	ngOnInit(): void {
		this.storyblokService.getProjects(1, this.selectedOption, this.framework)
		.then(
			data => this.projects = data.stories,
			err => console.log(err)
		);
	}

	// ngOnChanges(changes: SimpleChanges) {
	// 	// console.log(changes);
	// 	// this.storyblokService.getProjects(1, this.selectedOption, changes.framework.currentValue)
	// 	// .then(
	// 	// 	data => this.projects = data.stories,
	// 	// 	err => console.log(err)
	// 	// );
	// }

	handleSortBy() {
		this.storyblokService.getProjects(1, this.selectedOption, this.framework)
		.then(
			data => this.projects = data.stories,
			err => console.log(err)
		);
	}
}
