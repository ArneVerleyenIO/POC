import { Component, OnInit } from '@angular/core';
import { StoryblokService } from '../shared/services/storyblok.service';
import { Components } from '../components';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-root',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {
  story: any = { content: null, name: '' };
  components: any = Components;
  pageNotFound: boolean = false;
 
  constructor(
    private storyblokService: StoryblokService,
    private route: ActivatedRoute,
    ) {
    window.storyblok.init();
    window.storyblok.on(['change', 'published'], function () {
      // location.reload(true)
      location.reload()
    });
  }
 

  ngOnInit() {
	this.getPages();
  }

  getPages() {
	this.route.params
	.subscribe(
		params => {
			let page = params['page'];
			if (page === undefined || page === 'nl') {
				page = 'home';
			};
			this.storyblokService.getStory(page, { version: 'draft' })
			.then(
				data => this.story = data.story,
				reason => this.pageNotFound = true
			)
		},
		error => {
      		console.log(error);
		}
	)
  }
}
