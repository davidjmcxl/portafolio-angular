import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiComponent } from './experi/experi.component';
import { ContentComponent } from './components/content/content.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  { path: '', redirectTo: 'content', pathMatch: 'full' },
{ path: 'content', component: ContentComponent },
{ path: 'about-me', component: AboutMeComponent },
{ path: 'experi', component: ExperiComponent },
{ path: 'skills', component: SkillsComponent },
{ path: 'experi', component: ExperiComponent },
{ path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
