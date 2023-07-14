import { ApiResponse } from './../../data/models/api.response';
import { UserService } from './../../services/user/user.service';
import { appConfig } from './../../../config/app.config';
import { User } from './../../data/models/user.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  user!: ApiResponse<User> | null;
  accessCode!: string;

  ngOnInit(): void {
    this.accessCode = this.route.snapshot.params['trackingCode'];
    this.getUser(this.accessCode);
  }

  getUser(accessCode: string): void {
    const url: string = `${appConfig.serverURL}/profile/profile/${accessCode}`;
    console.log(url);
    this.userService.getUser(url).subscribe({
      next: (res) => {
        this.user = res;
      },
      error: (err) => console.log('Error getting the profile', err),
    });
  }
}
