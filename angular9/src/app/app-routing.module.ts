import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { ComplaintComponent } from './complaint/complaint.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'signin', component: LoginPageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'complaint', component: ComplaintComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
