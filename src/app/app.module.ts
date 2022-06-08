import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Ngxs modules import

import { NgxsModule }  from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule }  from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule }  from '@ngxs/logger-plugin';

import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './home/home-page/home-page.component';
import { HomeHeaderComponent } from './home/components/home-header/home-header.component';
import { FilterComponent } from './home/components/filter/filter.component';
import { ProjectsListComponent } from './home/components/projects-list/projects-list.component';
import { ProjectPageComponent } from './project/project-page/project-page.component';
import { HeaderComponent } from './project/components/header/header.component';
import { BodyComponent } from './project/components/body/body.component';
import { ProjectFooterComponent } from './project/components/project-footer/project-footer.component';
import { SettingsPageComponent } from './profile/settings-page/settings-page.component';
import { SwitchComponent } from './profile/components/switch/switch.component';
import { ProfileHeaderComponent } from './profile/components/profile-header/profile-header.component';
import { HomeNgxsComponent } from './home-ngxs/home-ngxs.component';
import { PageComponent } from './page/page.component';
import { ProjectState } from './shared/projects/projects.state';


// Storyblok
import { StoryblokService } from './shared/services/storyblok.service';
import { StoryblokDirective } from './storyblok.directive';
import { StoryPageComponent } from './storyblok/story-page/story-page.component';
import { TeaserComponent } from './storyblok/teaser/teaser.component';
import { GridComponent } from './storyblok/grid/grid.component';
import { FeatureComponent } from './storyblok/feature/feature.component';
import { DynamicModule } from 'ng-dynamic-component';
import { ProjectsComponent } from './storyblok/projects/projects.component';
import { FiltersComponent } from './storyblok/projects/components/filters/filters.component';
import { DropdownComponent } from './storyblok/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeHeaderComponent,
    FilterComponent,
    ProjectsListComponent,
    ProjectPageComponent,
    HeaderComponent,
    BodyComponent,
    ProjectFooterComponent,
    SettingsPageComponent,
    SwitchComponent,
    ProfileHeaderComponent,
    HomeNgxsComponent,
    PageComponent,
    TeaserComponent,
    GridComponent,
    FeatureComponent,
    StoryPageComponent,
    StoryblokDirective,
    ProjectsComponent,
    FiltersComponent,
    DropdownComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgxsModule.forRoot([
      ProjectState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    DynamicModule,
  ],
  providers: [
    StoryblokService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
