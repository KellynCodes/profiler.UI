import { TrackComponent } from './../pages/track/track.component';
import { Routes } from '@angular/router';
import { UserComponent } from '../pages/user/user.component';
import { AdminComponent } from '../pages/admin/admin.component';

export const route: Routes = [
  { path: '', component: TrackComponent },
  { path: 'track', component: TrackComponent },
  { path: 'user/update', component: AdminComponent },
  { path: 'user/:trackingCode', component: UserComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: 'track', pathMatch: 'full' },
];
