import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) {
   }

  getRoom():any {
    return this.http.get("http://localhost:3001/api/rooms" );
  }
}
