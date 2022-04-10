import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookingForm:any;
  constructor(private fb: FormBuilder,private route: ActivatedRoute) { 
    const id = this.route.snapshot.paramMap.get('id');
    this.bookingForm = this.fb.group({
      guest_count: ['', [Validators.required]],
      start_date: ['', [Validators.required]],
      end_date: ['', [Validators.required]],

    })

  }


  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.bookingForm.value);
  }

}
