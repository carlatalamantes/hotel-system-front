import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-roomdetail',
  templateUrl: './roomdetail.component.html',
  styleUrls: ['./roomdetail.component.scss']
})
export class RoomdetailComponent implements OnInit {

  roomID:any;
  room:any;

  constructor(private roomService:RoomsService, private router:Router,private activeRoute:ActivatedRoute) { 
    this.roomID=this.activeRoute.snapshot.paramMap.get("id")
    this.roomService.getRoom(this.roomID).subscribe((res: any) => {
      this.room=res;
    });
  }

  ngOnInit(): void {
  }
  
  goToBook(id: any) {
    this.router.navigate([`/booking/${id}`]);
  }


}
