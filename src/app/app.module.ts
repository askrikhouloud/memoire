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
import { EvenementComponent } from './evenement/evenement.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomComponent } from './hom/hom.component';
import { EmployerComponent } from './employer/employer.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';

@NgModule({
  declarations: [
    AppComponent,

    DashboardComponent,
    FormationComponent,

    NotificationComponent,
    UserComponent,
    StageComponent,
    EvenementComponent,
    LoginComponent,
    HomComponent,
    EmployerComponent,
    StagiaireComponent,

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
