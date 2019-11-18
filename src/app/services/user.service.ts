import { Injectable } from '@angular/core';
import { User } from "../models/user"
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // users:User[]=[]
  private api = "https://jsonplaceholder.typicode.com/users/";
  
  currentUser:User;
  
  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.api);
    
  }

}
