import { ApiResponse } from './../../data/models/api.response';
import { Observable } from 'rxjs';
import { User } from './../../data/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(url: string): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(url);
  }
}
