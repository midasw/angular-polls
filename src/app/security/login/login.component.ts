import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../models/user-login.model';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: UserLogin = new UserLogin('', '');
  submitted: boolean = false;

  constructor(private _router: Router, private _authenticateService: AuthenticateService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this._authenticateService.authenticate(this.model).subscribe(result => {
      localStorage.setItem("token", result.token);
      localStorage.setItem("userID", result.userID.toString());
      localStorage.setItem("username", result.name);
      this._authenticateService.isLoggedin.next(result.token ? true : false);
      this._router.navigate(['/dashboard']);
    }, error => {
      console.log(error);
    });
  }
}
