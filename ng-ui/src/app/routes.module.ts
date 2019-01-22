import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { LogoutComponent } from './shared/logout/logout.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '/login',
    component: LoginComponent
  },
  {
    path: '/logout',
    component: LogoutComponent
  },
  /* {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  }, */
];

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    RouterModule
  ]
})

export class RoutesModule { }
