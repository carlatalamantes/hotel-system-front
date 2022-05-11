import { Component, OnInit, Input } from '@angular/core';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.scss'],
})
export class ReservationCardComponent implements OnInit {
  @Input('reservation') reservation: any;

  constructor(private reservationService: ReservationsService) {}

  ngOnInit(): void {}

  cancelReservation(): any {
    const id = this.reservation._id;
    const {
      end_date,
      start_date,
      guest_count,
      id_guest,
      id_room,
      total,
    } = this.reservation;
    const status="cancelled"
    this.reservationService
      .cancelReservation(id, {
        end_date,
        start_date,
        guest_count,
        id_guest,
        id_room,
        status,
        total,
      })
      .subscribe((res: any) => {

        console.log(res.message);
      });
  }
}
