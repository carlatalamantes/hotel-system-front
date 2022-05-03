import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  roomArray: any[] = [];
  num: any = 6;

  constructor(private roomService: RoomsService, private router: Router) {
    this.roomService.getRooms().subscribe((res: any) => {
      this.roomArray = res;
      this.num = res.length;
    });
  }

  ngOnInit(): void {}

  
}
