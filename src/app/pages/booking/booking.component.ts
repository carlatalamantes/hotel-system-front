import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm: any;
  roomID: any;
  room: any;
  isError: Boolean = false;
  showAlert: Boolean = false;
  message: String = '';

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private roomService: RoomsService
  ) {
    this.roomID = this.activeRoute.snapshot.paramMap.get('id');
    this.roomService.getRoom(this.roomID).subscribe((res: any) => {
      this.room = res;
    });

    this.bookingForm = this.fb.group({
      guest_count: ['', [Validators.required]],
      start_date: ['', [Validators.required]],
      end_date: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  getTotalDays(date1: Date, date2: Date): number {
    if (date2.getTime() > date1.getTime()) {
      var Difference_In_Time = date2.getTime() - date1.getTime();
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

      //Check that start date is not after end date
      //check that day count is at least 1
      return Difference_In_Days;
    }else{
      return -1
    }
  }

  getTotalPrice(date1: Date, date2: Date): number {
    let startDate = new Date(date1);
    let endDate = new Date(date2);
    let days = this.getTotalDays(startDate, endDate);
    if(days==-1){
      return 0
    }
    return this.room.nightly_price * days;
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      var body = this.bookingForm.getRawValue();
      const total = this.getTotalPrice(body.start_date, body.end_date);
      if(total==0){
        this.isError = true;
        this.message = "End date should be greater than start date";
        this.showAlert = true;
      }else{
      const id_room = this.roomID;
      body = { total, id_room, ...body };
      this.roomService.createReservation(body).subscribe({
        next: (res: any) => {
          this.bookingForm.reset();
          this.isError = false;
          this.message = res.message;
          this.showAlert = true;
        },
        error: (err: { error: { message: String } }) => {
          this.isError = true;
          this.message = err.error.message;
          this.showAlert = true;
        },
      });}
    }
  }
}
