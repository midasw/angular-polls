import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFriendFormComponent } from './add-friend-form/add-friend-form.component';
import { FriendsComponent } from './friends/friends.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';
import { FriendRequestsComponent } from './friend-requests/friend-requests.component';
import { MyFriendsComponent } from './my-friends/my-friends.component';



@NgModule({
  declarations: [AddFriendFormComponent, FriendsComponent, FriendRequestsComponent, MyFriendsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule
  ],
  exports: [
    FriendRequestsComponent
  ]
})
export class FriendsModule { }
