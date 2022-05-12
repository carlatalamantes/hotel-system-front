import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.scss'],
})
export class ReservationCardComponent implements OnInit {
  @Input('reservation') reservation: any;
  isError: Boolean = false;
  showAlert: Boolean = false;
  message: String = '';
  currentStatus: any;

  constructor(
    private reservationService: ReservationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentStatus = this.reservation.status;
  }

  cancelReservation(): any {
    const id = this.reservation._id;
    const { end_date, start_date, guest_count, id_guest, id_room, total } =
      this.reservation;
    const status = 'cancelled';
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
      .subscribe(
        (res: any) => {
          this.message = 'Reservation was cancelled';
          this.showAlert = true;
          this.currentStatus = 'cancelled';
        },
        (err: any) => {
          console.log(err);
        }
      );
  }
}
