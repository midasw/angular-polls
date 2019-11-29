import { Component, OnInit } from '@angular/core';
import { UserRegister } from '../models/user-register.model';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  model: UserRegister = new UserRegister('', '', '', '');
  submitted: boolean = false;

  constructor(private _authenticateService: AuthenticateService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this._authenticateService.register(this.model).subscribe();
  }
}
