import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { CommonModule, DatePipe } from '@angular/common';
import { EventTypesComponent } from './event-types/event-types.component';
import { EventTypesService } from './services/event-types.service';
import { HttpRequestInterceptor } from './interceptor/http-request.interceptor';
import { EventListingsComponent } from './event-listings/event-listings.component';
import { EventListService } from './services/event-list.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    EventTypesComponent,
    EventListingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    AuthenticationService,
    EventTypesService,
    EventListService,
    AuthGuardService,
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
