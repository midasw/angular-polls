import { Component, OnInit } from '@angular/core';
import { UserRegisterInvitee } from '../models/user-register-invitee.model';
import { AuthenticateService } from '../services/authenticate.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserLogin } from '../models/user-login.model';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent implements OnInit {

  model: UserRegisterInvitee = new UserRegisterInvitee('', '', '', '');
  errorMsg: string = '';

  constructor(private _authenticateService: AuthenticateService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.model.guid = this._route.snapshot.paramMap.get("guid");
  }

  onSubmit() {
    this._authenticateService.registerInvitee(this.model).subscribe(result => {

      let login = new UserLogin(result.email, this.model.password);

      this._authenticateService.authenticate(login).subscribe(result => {
        localStorage.setItem("token", result.token);
        localStorage.setItem("userID", result.userID.toString());
        localStorage.setItem("username", result.name);
        this._authenticateService.isLoggedin.next(result.token ? true : false);
        this._router.navigate(['/dashboard']);
      });
    },
    error => {
      this.errorMsg = error.error.message
    });
  }
}
