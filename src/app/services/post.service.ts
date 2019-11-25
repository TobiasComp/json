import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  
  private api = "https://jsonplaceholder.typicode.com/posts?userId=#";
  
  constructor(private http:HttpClient, public userService:UserService) { }

  public getUserPosts():Observable<Post[]>{
    this.api = this.api.replace("#",this.userService.currentUser.id.toString());
    
    return this.http.get<Post[]>(this.api);
  }

  public getLastPosts():Observable<Post[]>{
    let newApi = "https://jsonplaceholder.typicode.com/posts?";
    for (let i=90; i < 100; i++)
      newApi += `id=${i}&`
    return this.http.get<Post[]>(newApi);
  }

}
