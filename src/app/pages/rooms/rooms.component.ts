import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  roomArray:any[]=[];
  num:any = 6;


  constructor(private roomService:RoomsService, private router:Router) { 
    console.log(this.roomService.getRoom().subscribe((res: any)=>{
      this.roomArray=res;
      console.log(res)
    }))

  }

  ngOnInit(): void {

  }

  goToDetail(path:any,id:any){
    let url: string = "/"+path+"/" + id
    this.router.navigateByUrl(url);
  }

}
