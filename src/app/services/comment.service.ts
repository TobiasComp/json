import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  currentPost:Post
  private api = "http://jsonplaceholder.typicode.com/comments?postId=#";
  constructor(private http:HttpClient) { }

  public getComments(userId:number):Observable<Comment[]>{
    let newApi = this.api
      .replace("#",userId.toString());
    return this.http.get<Comment[]>(newApi);
  }
}
