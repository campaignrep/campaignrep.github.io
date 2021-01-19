import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { 
  AuthGuardService as AuthGuard 
} from './auth/auth-guard.service';
import { EventTypesComponent } from './event-types/event-types.component';
import { EventListingsComponent } from './event-listings/event-listings.component';
import { EventCheckinComponent } from './event-checkin/event-checkin.component';

const routes: Routes = [
  { 
    path: '', component: DashboardComponent 
  },
  { 
    path: 'login', component: LoginComponent  
  },
  { 
    path: 'dashboard', component: DashboardComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'event-types', component: EventTypesComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'event-listings/:id', component: EventListingsComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'event-checkin/:eventId/:eventTypeId', component: EventCheckinComponent,
    canActivate: [AuthGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
