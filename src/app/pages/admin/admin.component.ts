import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationsService } from 'src/app/services/reservations.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  reservationsArray: any[] = [];
  num: any = 6;

  constructor(private reservationService:ReservationsService,private router:Router) { 
    this.reservationService.getReservations().subscribe((res: any) => {
      this.reservationsArray = res;
      this.num = res.length;
      console.log(res)
    });
  }

  ngOnInit(): void {
  }


  goToDetail(){
    this.router.navigate([`/admin`]);
  }


}
