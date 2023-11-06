import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WorkingDayComponent } from './components/working-day/working-day.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { HumorComponent } from './components/humor/humor.component';
import { BreakComponent } from './components/break/break.component';
import { WorkComponent } from './components/work/work.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthorizationGuard } from './guards/authorization.guard';

const routes: Routes = [
  { path :"",component: WorkingDayComponent ,canActivate:[AuthenticationGuard] },
  {path:"login" , component:LoginComponent},
  {path:"humor" , component:HumorComponent ,canActivate:[AuthenticationGuard]},
  {path:"break",component:BreakComponent,canActivate:[AuthenticationGuard]},
  {path:"work",component:WorkComponent,canActivate:[AuthenticationGuard]},
  {path:"admin",component: DashboardComponent,canActivate:[AuthorizationGuard],data: {role: ['ADMIN']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
