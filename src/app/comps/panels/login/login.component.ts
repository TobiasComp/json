import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { PagingService } from '../../../services/paging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService:LoginService, public paging:PagingService) { }

  ngOnInit() {
  }

  login(){
    this.loginService.currentSignIn = this['user'];
    // this.paging.currentPanel = 'users';
    
  }
}
