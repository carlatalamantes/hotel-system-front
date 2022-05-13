import { Component,Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss']
})
export class RoomCardComponent implements OnChanges {
  @Input('item') item:any;
  apiurl=environment.apiUrl;
  roomImage = `${this.apiurl}uploads/`;


  constructor( private router: Router) {
   }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any) {
    this.item=changes.item.currentValue;
    this.roomImage+=changes.item.currentValue.image

  }

  goToDetail(id: any) {
    this.router.navigate([`/roomdetail/${id}`]);
  }

  
  goToBook(id: any) {
    this.router.navigate([`/booking/${id}`]);
  }
}
