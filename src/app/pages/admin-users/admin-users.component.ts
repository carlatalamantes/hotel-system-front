import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  usersArray: any[] = [];
  num: any = 6;

  constructor(private userService:UserService,private router:Router) { 
    this.userService.getProfiles().subscribe((res: any) => {
      this.usersArray = res;
      this.num = res.length;
    });
  }

  ngOnInit(): void {
    this.userService.getProfiles().subscribe((res: any) => {
      this.usersArray = res;
      this.num = res.length;
    });
  }


  deleteUser(id:any){
    this.userService.deleteAccount(id).subscribe((res: any) => {
      console.log(res)
     this.ngOnInit();
    });
  }

}
