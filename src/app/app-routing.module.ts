import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { BookingComponent } from './pages/booking/booking.component';
import { RoomdetailComponent } from './pages/roomdetail/roomdetail.component';
import { CanActivateViaAuthGuardGuard } from './guards/can-activate-via-auth-guard.guard';
import { CanActivateAlreadyLoggedGuard } from './guards/can-activate-already-logged.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminUsersComponent } from './pages/admin-users/admin-users.component';
import { CanActivateAdminGuard } from './guards/can-activate-admin.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginSuccessComponent } from './pages/login-success/login-success.component';
import { AdminDetailComponent } from './pages/admin-detail/admin-detail.component';
import { AdminRoomsComponent } from './pages/admin-rooms/admin-rooms.component';
import { AdminRoomsDetailComponent } from './pages/admin-rooms-detail/admin-rooms-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login-success', component: LoginSuccessComponent },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [CanActivateAlreadyLoggedGuard],
  },
  {
    path: 'rooms',
    component: RoomsComponent,
    canActivate: [CanActivateViaAuthGuardGuard],
  },
  {
    path: 'booking/:id',
    component: BookingComponent,
    canActivate: [CanActivateViaAuthGuardGuard],
  },
  {
    path: 'roomdetail/:id',
    component: RoomdetailComponent,
    canActivate: [CanActivateViaAuthGuardGuard],
  },
  {
    path: 'admin',
    canActivate: [CanActivateAdminGuard],
    children: [
      { path: 'reservations', children:[
        {path:"", component: AdminComponent},
        { path: ':id', component: AdminDetailComponent },
      ] },
      { path: 'users', children:[
        {path:"", component: AdminUsersComponent},
      ] },
      { path: 'rooms', children:[
        {path:"", component: AdminRoomsComponent},
        { path: ':id', component: AdminRoomsDetailComponent },
      ] },      
    ],
  },

  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [CanActivateViaAuthGuardGuard],
  },
  {
    path: 'not-found',
    pathMatch: 'full',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
