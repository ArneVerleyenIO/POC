import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/*
 * Modules
 */
import { RouterModule } from '@angular/router';

// Ngxs modules import

import { NgxsModule }  from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule }  from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule }  from '@ngxs/logger-plugin';

/*
 * Components
 */

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

/*
 *  Services
 */

import { ApiService } from './services/api.service';
import { StoryblokService } from './services/storyblok.service';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ProjectState } from './projects/projects.state';
// import { RouterState } from './services/router.service';


export function HttpLoaderFactory (http: HttpClient) {
  return new TranslateHttpLoader(http);
};


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forRoot(
      {
        loader : {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }
    ),
    NgxsModule.forRoot([
      ProjectState,
      // AppState
    ]),
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    TranslateModule,
  ],
  providers: [
    ApiService,
    StoryblokService,
  ]
})

export class SharedModule {}
