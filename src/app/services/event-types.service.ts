import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class EventTypesService {

    constructor(
        private http: HttpClient,
        private authService: AuthenticationService
        ) { }

    getEventTypes() {
        const token = this.authService.getToken() || '';
        const httpOptions = {
            headers: new HttpHeaders({
                'X-CSRF-Token': token,
                'Content-Type': 'application/json'
            })
        };
        return this.http.get<any>(`https://monte.campaignrep.org/api/event_type`, httpOptions);
    }
}