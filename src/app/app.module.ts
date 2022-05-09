import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { BookingComponent } from './pages/booking/booking.component';
import { RoomdetailComponent } from './pages/roomdetail/roomdetail.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';
import { CookieService } from 'ngx-cookie-service';
import { CanActivateViaAuthGuardGuard } from './guards/can-activate-via-auth-guard.guard';
import { CanActivateAlreadyLoggedGuard } from './guards/can-activate-already-logged.guard';
import { RoomCardComponent } from './components/room-card/room-card.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminUsersComponent } from './pages/admin-users/admin-users.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    RoomsComponent,
    BookingComponent,
    RoomdetailComponent,
    AlertComponent,
    RoomCardComponent,
    AdminComponent,
    AdminUsersComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CookieService, CanActivateViaAuthGuardGuard,CanActivateAlreadyLoggedGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
