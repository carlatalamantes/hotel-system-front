import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomsService } from 'src/app/services/rooms.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-rooms-detail',
  templateUrl: './admin-rooms-detail.component.html',
  styleUrls: ['./admin-rooms-detail.component.scss'],
})
export class AdminRoomsDetailComponent implements OnInit {
  room: any;
  imageForm:FormGroup;
  isError: Boolean = false;
  showAlert: Boolean = false;
  message: String = '';
  apiurl=environment.apiUrl;
  roomImage = `${this.apiurl}uploads/`;


  constructor(
    private activeRoute: ActivatedRoute,
    private roomService: RoomsService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.room = this.activeRoute.snapshot.paramMap.get('room');
    this.room = JSON.parse(this.room);
    this.roomImage += this.room.image;
    this.imageForm=this.fb.group({
      image:['',Validators.required]
    })
  }
  ngOnInit(): void {}

  deleteRoom(id: any) {
    this.roomService.deleteRoom(id).subscribe(
      (res: any) => {
        this.router.navigate(['/admin/rooms']);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  onSubmit() {
    const formData = new FormData();
    let img=this.imageForm.get("image")?.value;
    formData.append('image', img);

    this.roomService.addImage(formData,this.room._id).subscribe((res: any) => {
     this.router.navigate(["/admin/rooms"])
    });

  }

  onFileChange(event:any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.imageForm.patchValue({
        image: file
      });
    }
  }
}
