import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  token: String = '';
  header: any;

  constructor(private http: HttpClient, private UserService: UserService) {
    this.token = this.UserService.getToken();
    this.header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
    };
  }

  getRooms(): any {
    if (this.token) {
      var header = {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
      };
      return this.http.get('http://localhost:3001/api/rooms', header);
    }
  }

  getRoom(id: String): any {
    if (this.token) {
      var header = {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
      };
      return this.http.get(`http://localhost:3001/api/rooms/${id}`, header);
    }
  }

  createReservation(body: any): any {
    if (this.token) {
      return this.http.post(`http://localhost:3001/api/reservations/`,body, this.header);
    }
  }
}
