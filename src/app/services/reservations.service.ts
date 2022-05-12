import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  token: String = '';
  header: any;
  constructor(private http: HttpClient, private UserService: UserService) {
    this.token = this.UserService.getToken();
    this.header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
    };
   }

  getReservations(): any {
    if (this.token) {
      var header = {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
      };
      return this.http.get('http://localhost:3001/api/reservations', header);
    }
  }

  cancelReservation(id:String,body:any):any{
    if (this.token) {
      var header = {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
      };
      return this.http.put(`http://localhost:3001/api/reservations/${id}`,body,header);
    }
  }

  createReservation(body:any):any{
    if (this.token) {
      var header = {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
      };
      return this.http.post(`http://localhost:3001/api/reservations`,body,header);
    }
  }
}
