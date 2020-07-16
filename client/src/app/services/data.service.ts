import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer, pipe } from 'rxjs';
import { Item } from '../models/item';
import { map } from 'rxjs/internal/operators/map';
import { User } from '../models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  @Output() searchCriteria = new EventEmitter<String>();

  private readonly ROOT_URL = 'api/v1/'

  constructor(private http: HttpClient, private auth: AuthService) { }

  getItems(): Observable<Item[]> {

    return this.http.get<Item[]>(`${this.ROOT_URL}items/`)
      .pipe(map(items => {
          return items;
      }));
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.ROOT_URL}users/`)
      .pipe(map( users => {
        return users;
      }));
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.ROOT_URL}users/${id}/`)
      .pipe(map(user => {
        return user;
    }));
  }
  createItem(item: Item): Observable<Item> {

      item.user.id = this.auth.getLoggedInUserId();
      return this.http.post<Item>(`${this.ROOT_URL}items/`, item)
        .pipe(map(createdItem => {
          return createdItem;
        }));
    }
  
}
