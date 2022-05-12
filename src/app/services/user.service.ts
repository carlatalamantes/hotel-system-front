import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  token: String = '';
  header: any;

  constructor(private http: HttpClient, private cookies: CookieService) {
    this.token = this.getToken();
    this.header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
    };
  }

  login(user: any): Observable<any> {
    return this.http.post('http://localhost:3001/api/users/login', user);
  }

  signup(user: any): Observable<any> {
    return this.http.post('http://localhost:3001/api/users', user);
  }

  signupGoogle(): Observable<any> {
    return this.http.get('http://localhost:3001/auth/google');
  }
  setToken(token: any) {
    this.cookies.set('token', token, {
      expires: new Date(new Date().getTime() + 1000 * 60 * 60),
    });
  }

  getToken() {
    return this.cookies.get('token');
  }

  deleteToken() {
    this.cookies.delete('token');
  }

  isLogged() {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  decodeToken(prop: any) {
    var token = this.getToken();
    if (!token) return;
    var decoded: any = jwt_decode(token);
    return decoded[prop];
  }

  isAdmin() {
    var role = this.decodeToken('role');
    if (role == 'admin') {
      return true;
    }
    return false;
  }

  getProfile(idParam = '') {
    var id;
    if (idParam!="") {
      id = idParam;
    } else {
      id = this.decodeToken('id');
    }

    return this.http.get(`http://localhost:3001/api/users/${id}`, this.header);
  }

  getMyReservations() {
    var id = this.decodeToken('id');
    return this.http.get(
      `http://localhost:3001/api/users/${id}/reservations`,
      this.header
    );
  }

  getProfiles(): any {
    if (this.token) {
      var header = {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
      };
      return this.http.get('http://localhost:3001/api/users', header);
    }
  }

  deleteAccount(id: any): any {
    if (this.token) {
      var header = {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
      };
      return this.http.delete(`http://localhost:3001/api/users/${id}`, header);
    }
  }
}
