import { Gender } from './../../data/enums/gender';
import { User } from './../../data/models/user.model';
import { AdminService } from './../../services/admin/admin.service';
import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { HttpStatusCode } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(
    private adminService: AdminService,
    private clipBoardService: ClipboardService,
    private router: Router
  ) {}
  gender!: Gender;
  trackingCode!: string | undefined;
  message!: string | null;
  errorMessage!: string | null;
  user: User = {
    senderImage: '',
    receiverImage: '',
    senderName: '',
    receiverName: '',
    email: '',
    origin: '',
    destinationCountry: '',
    age: 0,
    address: '',
    trackingCode: '',
    gender: this.gender,
  };

  executeAfterDelay(timeOut: number) {
    setTimeout(() => {
      this.message = null;
      this.errorMessage = null;
    }, timeOut);
  }

  copyTrackingCode(): void {
    if (this.trackingCode == null) {
      alert('No Tracking Code Available');
      return;
    }

    this.clipBoardService.copy(this.trackingCode);
    this.message = 'Tracking code copied to clipboard';
    this.executeAfterDelay(5000);
    this.router.navigateByUrl(`/user/${this.trackingCode}`);
  }

  public uploadProfile(): void {
    this.adminService.uploadProfile(this.user).subscribe({
      next: (response) => {
        if (response.statusCode != HttpStatusCode.Ok) {
          if (typeof response.message === 'object') {
            this.errorMessage = response.message.message;
            this.executeAfterDelay(2000);
            return;
          }

          if (typeof response.message === 'string') {
            this.errorMessage = response.message;
            this.executeAfterDelay(2000);
            return;
          }
        }
        this.message = response.message;
        this.trackingCode = response.data?.trackingCode;
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        console.log(err);
      },
    });
  }
}
