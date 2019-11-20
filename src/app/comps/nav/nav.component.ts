import { Component, OnInit } from '@angular/core';
import { PagingService } from '../../services/paging.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public paging:PagingService, public userService:UserService) { }

  ngOnInit() {
  }

  navTo(name:string){
    this.paging.currentPanel = name;
  }
}
