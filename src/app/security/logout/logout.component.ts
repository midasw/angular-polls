import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private _authenticateService : AuthenticateService, private _router : Router) { }

  ngOnInit() {
    localStorage.clear();
    this._authenticateService.isLoggedin.next(false);
    this._router.navigate(['/']);
  }
}
