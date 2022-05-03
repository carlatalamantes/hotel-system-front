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

  goToDetail(path: any, id: any) {
    let url: string = '/' + path + '/' + id;
    this.router.navigateByUrl(url);
  }

}
