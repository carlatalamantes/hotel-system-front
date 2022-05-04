import { Component,Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss']
})
export class RoomCardComponent implements OnChanges {
  @Input('item') item:any;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any) {
    this.item=changes.item.currentValue;
  }

  goToDetail(id: any) {
    this.router.navigate([`/roomdetail/${id}`]);
  }

  
  goToBook(id: any) {
    this.router.navigate([`/booking/${id}`]);
  }
}
