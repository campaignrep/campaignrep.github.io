import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class EventListService {

    constructor(
        private http: HttpClient,
        private authService: AuthenticationService
        ) { }

    getEvents(event_type_id: any) {
        const token = this.authService.getToken() || '';
        const httpOptions = {
            headers: new HttpHeaders({
                'X-CSRF-Token': token,
                'Content-Type': 'application/json'
            }),
            params: new HttpParams({
                fromString: "event_type_id=" + event_type_id
            }),
        };
        return this.http.get<any>(`https://monte.campaignrep.org/api/event`, httpOptions);
    }
}