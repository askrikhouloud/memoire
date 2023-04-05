import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormationComponent } from './formation/formation.component';
import { NotificationComponent } from './notification/notification.component';
import { UserComponent } from './user/user.component';
import { StageComponent } from './stage/stage.component';

import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

import { HomComponent } from './hom/hom.component';
import { EmployerComponent } from './employer/employer.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { CoursComponent } from './cours/cours.component';
import { FormateurComponent } from './formateur/formateur.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ApiServiceComponent } from './api.service/api.service.component';


@NgModule({
  declarations: [
  AppComponent,

    DashboardComponent,
    FormationComponent,

    NotificationComponent,
    UserComponent,
    StageComponent,

    HomComponent,
    EmployerComponent,
    StagiaireComponent,
    CoursComponent,
    FormateurComponent,
    LoginComponent,
    RegisterComponent,
    ApiServiceComponent,


    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
