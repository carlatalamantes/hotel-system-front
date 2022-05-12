import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomsService } from 'src/app/services/rooms.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.scss'],
})
export class AdminDetailComponent implements OnInit {
  reservation: any;
  userID: any;
  user:any;
  roomID:any;
  room:any;

  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserService,
    private roomService: RoomsService

  ) {
    this.reservation = this.activeRoute.snapshot.paramMap.get('reservation');
    this.reservation = JSON.parse(this.reservation);
    this.userID = this.reservation.id_guest;
    this.roomID=this.reservation.id_room;
  }

  ngOnInit(): void {
    this.userService.getProfile(this.userID).subscribe((res: any) => {
      this.user = res;
    });   
    this.roomService.getRoom(this.roomID).subscribe((res: any) => {
      this.room = res;
    });   
  }

}
