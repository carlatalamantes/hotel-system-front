import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.scss']
})
export class AdminDetailComponent implements OnInit {
  reservation:any;

  constructor(    private activeRoute: ActivatedRoute,
    ) {
      this.reservation = this.activeRoute.snapshot.paramMap.get('reservation');
      this.reservation=JSON.parse(this.reservation)
    }

  ngOnInit(): void {
  }

}
