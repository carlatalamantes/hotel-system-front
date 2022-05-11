import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile:any;
  reservationsArray: any[] = [];

  constructor(private userService:UserService) {
   this.userService.getProfile().subscribe((res:any)=>{
    this.profile=res;
    })

    this.userService.getMyReservations().subscribe((res:any)=>{
      this.reservationsArray=res;
    })
   }

  ngOnInit(): void {
  }

}
