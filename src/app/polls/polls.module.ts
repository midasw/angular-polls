import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatTooltipModule, MatCheckboxModule } from '@angular/material';
import { ViewPollComponent } from './view-poll/view-poll.component';
import { PollDetailComponent } from './poll-detail/poll-detail.component';
import { PollUsersComponent } from './poll-users/poll-users.component';



@NgModule({
  declarations: [CreatePollComponent, ViewPollComponent, PollDetailComponent, PollUsersComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule,
    MatTooltipModule
  ],
  exports: [
    CreatePollComponent
  ]
})
export class PollsModule { }
