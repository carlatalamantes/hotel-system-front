import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService,private router: Router) {}

  ngOnInit(): void {}

  isUserLogged():Boolean{
    return this.loginService.isLogged()
  }

  logout():void{
     this.loginService.deleteToken()
     this.router.navigate(["/home"])

  }
}
