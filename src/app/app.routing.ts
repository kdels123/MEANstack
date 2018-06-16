import {Routes, RouterModule} from '@angular/router';
import {WhiteBoardComponent} from './white-board/white-board.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {SectionListComponent} from './section-list/section-list.component';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
document.body.style.backgroundColor = 'lightgrey'


const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'navigator', component: CourseNavigatorComponent},
  {path: 'home', component: WhiteBoardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'course/:courseId', component: CourseViewerComponent},
  {path: 'course/:courseId/section', component: SectionListComponent},
  {path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent},
  {path : '**', component: WhiteBoardComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
