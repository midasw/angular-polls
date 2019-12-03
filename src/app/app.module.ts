import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurityModule } from './security/security.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from './security/security.interceptor';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';
import { PollsModule } from './polls/polls.module';
import { FriendsModule } from './friends/friends.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SecurityModule,
    DashboardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule,
    PollsModule,
    FriendsModule,
    HomeModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
