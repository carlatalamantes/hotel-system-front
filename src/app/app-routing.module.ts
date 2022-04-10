import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { BookingComponent } from './pages/booking/booking.component';
import { RoomdetailComponent } from './pages/roomdetail/roomdetail.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'rooms', component: RoomsComponent},
  { path: 'booking', component: BookingComponent},
  { path: 'roomdetail/:id', component: RoomdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }