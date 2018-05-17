import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Browser } from 'selenium-webdriver';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthService } from './services/auth-service.service';
import { LoggedInGuard } from './logged-in.guard';
import { SecretComponent } from './components/secret/secret.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AppComponent,
    NavMenuComponent,
    QuestionsComponent,
    SettingsComponent,
    LoginComponent,
    LogoutComponent,
    SecretComponent


  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      { path: 'Home',component:HomePageComponent },
      { path:'Questions',component:QuestionsComponent,canActivate:[LoggedInGuard]  },
      { path:'Settings',component:SettingsComponent,canActivate:[LoggedInGuard] },
      { path:'Login',component:LoginComponent},
      { path:'Logout',component:LogoutComponent,canActivate:[LoggedInGuard] },
      { path: '**', redirectTo: 'Home' }
    ])
  ],
  providers: [AuthService,LoggedInGuard],  
  bootstrap: [AppComponent]
})
export class AppModule { }
