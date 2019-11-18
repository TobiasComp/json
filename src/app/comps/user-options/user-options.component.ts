import { Component, OnInit } from '@angular/core';
import { PagingService } from 'src/app/services/paging.service';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.css']
})
export class UserOptionsComponent implements OnInit {

  constructor(public paging:PagingService) { }

  ngOnInit() {
  }
  navTo(panel:string){
    this.paging.currentPanel = panel;
  }
}
