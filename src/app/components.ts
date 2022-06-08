import { StoryPageComponent } from './storyblok/story-page/story-page.component';
import { TeaserComponent } from './storyblok/teaser/teaser.component';
import { GridComponent } from './storyblok/grid/grid.component';
import { FeatureComponent } from './storyblok/feature/feature.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component'; 
import { HomeHeaderComponent } from './home/components/home-header/home-header.component';
import { ProjectsComponent } from './storyblok/projects/projects.component';
import { DropdownComponent } from './storyblok/dropdown/dropdown.component';

let Components = {
  'page': StoryPageComponent,
  'teaser': TeaserComponent,
  'grid': GridComponent,
  'feature': FeatureComponent,
  'header': NavbarComponent,
  'home_header': HomeHeaderComponent,
  'project_list': ProjectsComponent,
  'dropdown': DropdownComponent
}
 
export { Components }