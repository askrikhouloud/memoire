import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/private/dashboard/dashboard.component';

import { LoginComponent } from './components/public/login/login.component';
import { NotificationComponent } from './components/private/notification/notification.component';
import { StageComponent } from './components/private/stage/stage.component';

import { AdminComponent } from './components/private/admin/admin.component';

import { EmployerComponent } from './components/private/employer/employer.component';
import { StagiaireComponent } from './components/private/stagiaire/stagiaire.component';
import { FormateurComponent } from './components/private/formateur/formateur.component';

import { AllUsersComponent } from './components/private/users/all-users/all-users.component';
import { UpdateUserComponent } from './components/private/users/update-user/update-user.component';
import { HomeComponent } from './components/public/home/home.component';
import { AuthGuard } from './guards/auth.guard';


import { AddFormationComponent } from './components/private/formation/formation/add-formation/add-formation.component';
import { ListFormationComponent } from './components/private/formation/formation/list-formation/list-formation.component';
import { UpdateFormationComponent } from './components/private/formation/formation/update-formation/update-formation.component';







const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuard]},
  { path: 'users', component: AllUsersComponent ,canActivate: [AuthGuard]},
  { path: 'update-user/:id', component: UpdateUserComponent ,canActivate: [AuthGuard]},

 


  { path: 'formateur', component: FormateurComponent  },
  
  { path: 'notification', component: NotificationComponent },


  { path: 'stage', component: StageComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'employer', component: EmployerComponent },
  { path: 'stagiaire', component: StagiaireComponent },

  { path: 'list-formation', component: ListFormationComponent ,canActivate: [AuthGuard]},
  { path: 'update-formation/:id', component: UpdateFormationComponent ,canActivate: [AuthGuard]},
  { path: 'add-formation', component: AddFormationComponent ,canActivate: [AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
