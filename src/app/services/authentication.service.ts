import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private http: HttpClient) {}

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
        return this.http.post<any>(`https://monte.campaignrep.org/api/user/logout`, {})
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.removeItem('currentUser');   
            localStorage.removeItem('userToken');  
        }));  
    }

    getToken() {
        return localStorage.getItem('userToken');
    }
}