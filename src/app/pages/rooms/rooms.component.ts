import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  roomArray:any[]=[];
  num:any = 6;


  constructor(private roomService:RoomsService) { 
    console.log(this.roomService.getRoom().subscribe((res: any)=>{
      this.roomArray=res;
      console.log(res)
    }))

  }

  ngOnInit(): void {

  }

}
