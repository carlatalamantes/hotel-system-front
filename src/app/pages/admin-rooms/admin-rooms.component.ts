import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-admin-rooms',
  templateUrl: './admin-rooms.component.html',
  styleUrls: ['./admin-rooms.component.scss']
})
export class AdminRoomsComponent implements OnInit {

  roomArray: any[] = [];
  num: any = 6;

  constructor(private roomService: RoomsService, private router: Router) {
    this.roomService.getRooms().subscribe((res: any) => {
      this.roomArray = res;
      this.num = res.length;
    });
  }

  ngOnInit(): void {

  }

  
  goToDetail(room:any){
    this.router.navigate([`/admin/rooms/${room._id}`,{room:JSON.stringify(room)}]);

  }

  createRoom(){
    
  }
}
