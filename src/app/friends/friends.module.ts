import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFriendFormComponent } from './add-friend-form/add-friend-form.component';
import { FriendsComponent } from './friends/friends.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FriendRequestsComponent } from './friend-requests/friend-requests.component';



@NgModule({
  declarations: [AddFriendFormComponent, FriendsComponent, FriendRequestsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule,
  ]
})
export class FriendsModule { }
