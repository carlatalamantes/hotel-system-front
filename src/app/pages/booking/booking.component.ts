import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookingForm:any;
  constructor(private fb: FormBuilder) { 

    this.bookingForm = this.fb.group({
      guest_count: ['', [Validators.required]],
      start_date: ['', [Validators.required]],
      end_date: ['', [Validators.required]],

    })

  }

  //Agregar ID de habitación

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.bookingForm.value);
  }

}
