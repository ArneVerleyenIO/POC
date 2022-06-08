import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home';
import { HomeNgxsComponent } from './home-ngxs/home-ngxs.component';
import { PageComponent } from './page/page.component';
import { SettingsPageComponent } from './profile/settings-page/settings-page.component';
import { ProjectPageComponent } from './project';


const routes: Routes = [
  { path: '', component: PageComponent },
  { path: 'project/:id', component: ProjectPageComponent },
  { path: 'nl/project/:id', component: ProjectPageComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: 'ngxs', component: HomeNgxsComponent },
  { path: 'nl/:page', component: PageComponent },
  { path: ':page', component: PageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
