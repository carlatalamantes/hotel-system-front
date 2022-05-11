import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.scss']
})
export class LoginSuccessComponent implements OnInit {

  token:string|null="";

  constructor(private activeRoute:ActivatedRoute,private router:Router,private userService:UserService) {
    this.token=this.activeRoute.snapshot.queryParamMap.get("token");
  }

  ngOnInit(): void {
    if(this.token!=null){
      this.userService.setToken(this.token)
      this.router.navigateByUrl("/rooms")
    }
  }

}
