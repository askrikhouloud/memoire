import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { FormationComponent } from './components/private/formation/formation.component';
import { NotificationComponent } from './components/private/notification/notification.component';
import { StageComponent } from './components/private/stage/stage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployerComponent } from './components/private/employer/employer.component';
import { StagiaireComponent } from './components/private/stagiaire/stagiaire.component';

import { FormateurComponent } from './components/private/formateur/formateur.component';
import { LoginComponent } from './components/public/login/login.component';

import { AllUsersComponent } from './components/private/users/all-users/all-users.component';

import { HeaderComponent } from './components/private/shared/header/header.component';

import { HomeComponent } from './components/public/home/home.component';
import { UpdateUserComponent } from './components/private/users/update-user/update-user.component';

import { AddFormationComponent } from './components/private/formation/formation/add-formation/add-formation.component';
import { ListFormationComponent } from './components/private/formation/formation/list-formation/list-formation.component';
import { UpdateFormationComponent } from './components/private/formation/formation/update-formation/update-formation.component';




@NgModule({
  declarations: [
    AppComponent,

    DashboardComponent,
    FormationComponent,

    NotificationComponent,

    StageComponent,

    EmployerComponent,
    StagiaireComponent,
 
    FormateurComponent,
    LoginComponent,

    AllUsersComponent,
    UpdateUserComponent,
    HeaderComponent,

    HomeComponent,
    

 

    AddFormationComponent,
    ListFormationComponent,
    UpdateFormationComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
