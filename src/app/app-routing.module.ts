
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormationComponent } from './formation/formation.component';
import { LoginComponent} from './login/login.component';
import { NotificationComponent } from './notification/notification.component';
import { UserComponent } from './user/user.component';
import { StageComponent } from './stage/stage.component';
import { CoursComponent} from './cours/cours.component';
import { AdminComponent } from './admin/admin.component';
import { HomComponent } from './hom/hom.component';
import { AuthService } from './auth.service';
import { EmployerComponent } from './employer/employer.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { FormateurComponent } from './formateur/formateur.component';
import { RegisterComponent} from './register/register.component';



const routes: Routes = [
  
  {path:'',component:LoginComponent},
  { path: 'login', component: LoginComponent },
  {path:'hom',component:HomComponent},
  {path:'dashboard',component:DashboardComponent },
  {path:'formation',component:FormationComponent},
  {path:'notification',component:NotificationComponent},
  {path:'user',component:UserComponent},
  {path:'stage',component:StageComponent },
  {path:'admin',component:AdminComponent},
  {path:'register',component:RegisterComponent},
  {path:'employer',component:EmployerComponent},
  {path:'stagiaire',component:StagiaireComponent},
  {path:'cours',component:CoursComponent},
  {path:'formateur',component:FormateurComponent},
 
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService],

  
})
export class AppRoutingModule { }
