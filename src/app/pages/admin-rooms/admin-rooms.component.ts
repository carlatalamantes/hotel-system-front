import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationsService } from 'src/app/services/reservations.service';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-admin-rooms',
  templateUrl: './admin-rooms.component.html',
  styleUrls: ['./admin-rooms.component.scss'],
})
export class AdminRoomsComponent implements OnInit {
  roomForm: FormGroup;
  roomArray: any[] = [];
  num: any = 6;
  isError: Boolean = false;
  showAlert: Boolean = false;
  message: String = '';
  servicesArray = [
    'kitchen',
    'tv',
    'hair dryer',
    'toiletries ',
    'breakfast',
    'mini bar',
    'safe',
  ];

  constructor(
    private roomService: RoomsService,
    private resService: ReservationsService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.roomService.getRooms().subscribe((res: any) => {
      this.roomArray = res;
      this.num = res.length;
    });

    this.roomForm = this.fb.group({
      name: ['', [Validators.required]],
      building: ['', [Validators.required]],
      exterior_number: ['', [Validators.required]],
      bed_count: [
        '',
        [Validators.required, Validators.min(1), Validators.max(4)],
      ],
      guest_count: [
        '',
        [Validators.required, Validators.min(1), Validators.max(4)],
      ],
      services: new FormArray([]),
      nightly_price: [[], [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    this.roomService.getRooms().subscribe((res: any) => {
      this.roomArray = res;
      this.num = res.length;
    });
  }

  goToDetail(room: any) {
    this.router.navigate([
      `/admin/rooms/${room._id}`,
      { room: JSON.stringify(room) },
    ]);
  }

  onSubmit() {
    if (this.roomForm.valid) {
      const data = this.roomForm.getRawValue();
      this.roomService.createRoom(data)
      .subscribe(
        (res: any)=>{
          this.message=res.message;
          this.showAlert=true;
          this.ngOnInit()
        },
        (err: any)=>{
          this.isError=true;
          this.message=err.error.errors[0].msg;
          this.showAlert=true;
        },     
        
      )
    } else {
      this.roomForm.markAllAsTouched();
    }
    this.roomForm.reset()
  }

  onCheckChange(event: any) {
    const formArray: FormArray = this.roomForm.get('services') as FormArray;
    if (event.target.checked) {
      formArray.push(new FormControl(event.target.value));
    } else {
      let i: number = 0;

      formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == event.target.value) {
          formArray.removeAt(i);
          return;
        }

        i++;
      });
    }
  }
}
