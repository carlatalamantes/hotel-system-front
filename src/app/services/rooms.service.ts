import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  token: String = '';

  constructor(private http: HttpClient, private loginService: LoginService) {
    this.token = this.loginService.getToken();
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
}
