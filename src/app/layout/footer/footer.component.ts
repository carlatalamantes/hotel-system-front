import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private loginService: LoginService,private router: Router) {}

  ngOnInit(): void {
  }

  
  isUserLogged():Boolean{
    return this.loginService.isLogged()
  }

  logout():void{
     this.loginService.deleteToken()
     this.router.navigate(["/home"])

  }

}
