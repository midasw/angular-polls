import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss']
})
export class ActivateComponent implements OnInit {

  activated: boolean = false;

  constructor(private route: ActivatedRoute, private _authenticateService: AuthenticateService) { }

  ngOnInit() {
    let guid = this.route.snapshot.paramMap.get("guid");

    this._authenticateService.activate(guid).subscribe(result => {
      this.activated = result.activated;
    });
  }
}
