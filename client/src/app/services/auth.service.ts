import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap, map } from 'rxjs/operators';
import { Tokens } from './../models/tokens';
import { parse } from 'querystring';
import { User } from '../models/user';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly ROOT_URL = 'api/v1/'
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: string;
  private helper = new JwtHelperService();

  constructor(private http: HttpClient) {}

  login(user: { email: string, password: string }): Observable<boolean> {
    return this.http.post<any>(`${this.ROOT_URL}token/`, user)
      .pipe(
        tap(tokens => this.doLoginUser(user.email, tokens)),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }

  getCurrentUser(): Observable<User> {
    const id = this.getLoggedInUserId();
    return this.http.get<User>('api/v1/users/' + id)
      .pipe(map(user => {
        console.log(JSON.stringify(user));
        return user;
      }));

  }
  getLoggedInUserId(): number {
    // console.log(JSON.parse(this.getJwtToken()));
    console.log(this.getJwtToken());
    const loggedInUser = this.getJwtToken();
    console.log(loggedInUser);
    let id: number;
    if (loggedInUser) {
      id = this.helper.decodeToken(loggedInUser).user_id;
    }
    return id;
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken() {
    return this.http.post<any>(`${this.ROOT_URL}token/refresh/`, {
      'refreshToken': this.getRefreshToken()
    }).pipe(tap((tokens: Tokens) => {
      this.storeJwtToken(tokens.access);
    }));
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(email: string, tokens: Tokens) {
    this.loggedUser = email;
    this.storeTokens(tokens);
  }

  private doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  register(user: {first_name: string, last_name: string, email: string, password: string }): Observable<boolean> {
    return this.http.post<any>(`${this.ROOT_URL}users/`, user)
      .pipe(
        mapTo(true),
        catchError(error => {
          console.log(JSON.stringify(error.error));
          return of(false);
        }));
  }

  logout() {
    this.doLogoutUser();
    /* return this.http.post<any>(`${this.ROOT_URL}/logout`, {
      'refreshToken': this.getRefreshToken()
    }).pipe(
      tap(() => this.doLogoutUser()),
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));*/
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.access);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refresh);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }
}
