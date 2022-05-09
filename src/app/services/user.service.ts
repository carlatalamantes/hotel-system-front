import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  login(user: any): Observable<any> {
    return this.http.post("http://localhost:3001/api/users/login", user);
  }

  signup(user: any): Observable<any> {
    return this.http.post("http://localhost:3001/api/users", user);
  }

  setToken(token: any) {
    this.cookies.set("token", token);
  }

  getToken() {
    return this.cookies.get("token");
  }

  deleteToken() {
    this.cookies.delete("token");
  }

  isLogged() {
    if (this.getToken()) {
      return true
    }
    return false
  }

  isAdmin(){
    var token = this.getToken();
    if (!token) return;
    var decoded:any = jwt_decode(token);
    if(decoded.role=="admin"){
      return true;
    }
    return false;
  }

}
