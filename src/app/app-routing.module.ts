import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './security/register/register.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './security/login/login.component';
import { ActivateComponent } from './security/activate/activate.component';
import { LogoutComponent } from './security/logout/logout.component';
import { CreatePollComponent } from './polls/create-poll/create-poll.component';
import { ViewPollComponent } from './polls/view-poll/view-poll.component';
import { FriendsComponent } from './friends/friends/friends.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'activate/:guid', component: ActivateComponent },
  { path: 'create', component: CreatePollComponent },
  { path: 'poll/:id', component: ViewPollComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
