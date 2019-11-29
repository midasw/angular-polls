import { Component } from '@angular/core';
import { AuthenticateService } from './security/services/authenticate.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularPolls';

  isLoggedin: boolean = false;

  constructor(private _authService : AuthenticateService, private _router: Router) {
    this._authService.isLoggedin.subscribe(result => {
      this.isLoggedin = result;
    });

/*    if (this.isLoggedin == true && _router.url == "/") {
      this._router.navigate(['/dashboard']);
    }*/
  }
}
