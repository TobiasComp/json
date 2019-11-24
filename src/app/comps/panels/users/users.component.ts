import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { PagingService } from 'src/app/services/paging.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   
   users:User[] = [];
  
   constructor(public router:Router, public userService:UserService, public paging:PagingService) {}
   

  ngOnInit() {
    console.log(    this.router.url);
    this.userService.getUsers()
      .subscribe(data => {
        this.users = data
        // console.log(data);
        
      }); 
      console.log(this.users);
         
  }
  chooseUser(current:User){
    this.userService.currentUser = current;
    // this.paging.currentPanel = 'userOptions';
    this.router.navigateByUrl('/userOptions');

  }
 
}
