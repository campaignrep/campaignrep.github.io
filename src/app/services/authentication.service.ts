import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(`https://monte.campaignrep.org/api/user/login`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                localStorage.setItem('userToken', user.token);
                return user.token;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null

        const token = this.getToken() || '';
        const httpOptions = {
            headers: new HttpHeaders({
                'X-CSRF-Token': token
            })
        };
        return this.http.post<any>(`https://monte.campaignrep.org/api/user/logout`, {}, httpOptions)
            .pipe(map(response => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.removeItem('currentUser');
                localStorage.removeItem('userToken');
                console.log('User Removed!');
            }));
    }

    getToken() {
        return localStorage.getItem('userToken');
    }
}