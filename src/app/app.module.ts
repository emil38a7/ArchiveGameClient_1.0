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


@NgModule({
  declarations: [
    HomePageComponent,
    AppComponent,
    NavMenuComponent,
    QuestionsComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      { path:'Questions',component:QuestionsComponent },
      { path:'Home',component:HomePageComponent},
      { path: '**', redirectTo: 'Home' }
    ])
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
