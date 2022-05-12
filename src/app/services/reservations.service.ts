import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  token: String = '';
  header: any;
  apiurl=environment.apiUrl;

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
      return this.http.get(`${this.apiurl}api/reservations`, header);
    }
  }

  cancelReservation(id:String,body:any):any{
    if (this.token) {
      var header = {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
      };
      return this.http.put(`${this.apiurl}api/reservations/${id}`,body,header);
    }
  }

  createReservation(body:any):any{
    if (this.token) {
      var header = {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
      };
      return this.http.post(`${this.apiurl}api/reservations`,body,header);
    }
  }
}
