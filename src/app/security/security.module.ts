import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ActivateComponent } from './activate/activate.component';
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { InvitationComponent } from './invitation/invitation.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ActivateComponent, LogoutComponent, InvitationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule,
    RouterModule
  ]
})
export class SecurityModule { }
