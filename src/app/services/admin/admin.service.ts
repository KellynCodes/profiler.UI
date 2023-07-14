import { ApiResponse } from './../../data/models/api.response';
import { User } from './../../data/models/user.model';
import { appConfig } from './../../../config/app.config';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  public uploadProfile(model: User): Observable<ApiResponse<User>> {
    const url: string = `${appConfig.serverURL}/profile/create-profile`;
    return this.http.post<ApiResponse<User>>(url, model);
  }
}
