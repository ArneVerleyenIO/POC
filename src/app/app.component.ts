import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IO - Portfolio';

  constructor (public translate: TranslateService) {
    translate.addLangs(['nl', 'en']);
    translate.setDefaultLang('nl');
    const localSettings = localStorage.getItem('settings');
    if (localSettings) {
      const settings = JSON.parse(localSettings);
      settings.english ? translate.use('en') : translate.use('nl');
    };
  };

}
// import { Component, OnInit } from '@angular/core';
// import { StoryblokService } from './shared/services/storyblok.service';
// import { Components } from './components';
 
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html'
// })
// export class AppComponent implements OnInit {
//   story: any = { content: null, name: '' };
//   components: any = Components;
 
//   constructor(private storyblokService: StoryblokService) {
//     window.storyblok.init();
//     window.storyblok.on(['change', 'published'], function () {
//       // location.reload(true)
//       location.reload()
//     });
//   }
 
//   ngOnInit() {
//     this.storyblokService.getStory('home', { version: 'draft' })
//       .then(data => this.story = data.story);
//   }
// }
