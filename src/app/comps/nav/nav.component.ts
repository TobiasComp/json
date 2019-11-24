import { Component, OnInit } from '@angular/core';
import { PagingService } from '../../services/paging.service';
import { UserService } from '../../services/user.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public paging:PagingService, public userService:UserService, public loginService:LoginService) { }

  ngOnInit() {
  }

  navTo(name:string){
    this.paging.currentPanel = name;
  }
}
