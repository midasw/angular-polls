import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FriendsService } from '../friends.service';

@Component({
  selector: 'app-add-friend-form',
  templateUrl: './add-friend-form.component.html',
  styleUrls: ['./add-friend-form.component.scss']
})
export class AddFriendFormComponent implements OnInit {

  success: boolean = false;

  myForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private _friendsService: FriendsService) { }

  ngOnInit() {
  }

  onSubmit() {
    this._friendsService.addFriend(this.myForm.get("email").value).subscribe(result => {
      this.success = true;
      this.myForm.reset();
    });
  }
}
