import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private UserService: UserService,private router: Router) {}

  ngOnInit(): void {}

  isUserLogged():Boolean{
    return this.UserService.isLogged()
  }

  logout():void{
     this.UserService.deleteToken()
     this.router.navigate(["/home"])

  }
}
