import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { LogoutComponent } from './shared/logout/logout.component';
import { SignupComponent } from './shared/signup/signup.component';
import { SearchComponent } from './shared/search/search.component';
import { RatingComponent } from './shared/rating/rating.component';
import { RoutesModule } from './routes.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    SearchComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
