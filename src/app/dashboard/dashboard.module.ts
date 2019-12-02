import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyPollsComponent } from './my-polls/my-polls.component';
import { RouterModule } from '@angular/router';
import { SharedWithMeComponent } from './shared-with-me/shared-with-me.component';
import { FriendsModule } from '../friends/friends.module';



@NgModule({
  declarations: [DashboardComponent, MyPollsComponent, SharedWithMeComponent],
  imports: [
    CommonModule,
    RouterModule,
    FriendsModule
  ]
})
export class DashboardModule { }
