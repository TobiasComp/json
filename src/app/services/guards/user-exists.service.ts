import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserExistsService implements CanActivate{

  canActivate() {
    if (this.userService.currentUser) 
      return true;
    else
      return false;
  }
  
  constructor(public userService:UserService) { }
}
