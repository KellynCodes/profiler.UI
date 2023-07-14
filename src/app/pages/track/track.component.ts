import { appConfig } from './../../../config/app.config';
import { UserService } from './../../services/user/user.service';
import { User } from '../../data/models/user.model';
import { ApiResponse } from './../../data/models/api.response';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css'],
})
export class TrackComponent {
  constructor(private router: Router, private userService: UserService) {}
  apiResponse!: ApiResponse<User>;
  accessCode: string = '';
  error!: ApiResponse | null;

  executeAfterDelay() {
    setTimeout(() => {
      this.error = null;
    }, 2000);
  }

  submit(): void {
    this.userService
      .getUser(`${appConfig.serverURL}/profile/profile/${this.accessCode}`)
      .subscribe({
        next: (res) => {
          this.apiResponse = res;
          alert(`${res.message} click ok to navigate to users profile.`),
            this.router.navigateByUrl(`/user/${this.accessCode}`);
        },
        error: (err) => {
          this.error = err.error.message;
          this.executeAfterDelay();
        },
      });
  }
}
