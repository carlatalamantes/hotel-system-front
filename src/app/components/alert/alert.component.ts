import { Component,Input, OnChanges} from '@angular/core';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],

  
})
export class AlertComponent implements OnChanges  {
  
  @Input('showAlert') showAlert:any=false;
  @Input('message') message:any="";
  @Input('isError') isError:any= false;
  


  

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any) {
    this.isError=changes.isError.currentValue;
    this.showAlert=changes.showAlert.currentValue;
    this.message=changes.message.currentValue;
  }

}
