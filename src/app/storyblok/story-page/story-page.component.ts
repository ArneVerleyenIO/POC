import { Component, OnInit, Input } from '@angular/core';
import { StoryblokService } from '../../shared/services/storyblok.service';
 
@Component({
  selector: 'app-page',
  templateUrl: './story-page.component.html',
  styleUrls: ['./story-page.component.scss']
})
export class StoryPageComponent implements OnInit {
  components: any;
 
  constructor(private storyblok: StoryblokService) {
    import('src/app/components').then(cp => {
      this.components = cp.Components;
    });
  }
 
  @Input() body: any[] | undefined;
  @Input() _editable: any;
 
  ngOnInit() {}
}