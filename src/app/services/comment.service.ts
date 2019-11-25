import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { PostComment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  currentPost:Post
  private api = "http://jsonplaceholder.typicode.com/comments?postId=#";
  constructor(private http:HttpClient) { }

  public getComments(postId:number):Observable<PostComment[]>{
    let newApi = this.api
      .replace("#",postId.toString());
    return this.http.get<PostComment[]>(newApi);
  }

  public getCommentsByPosts(postsIdArr:number[]):Observable<PostComment[]>{
    let newApi = "http://jsonplaceholder.typicode.com/comments?";
    postsIdArr.forEach(postId=>
      newApi += `postId=${postId}&`
    )
    console.log("This is the api request:",newApi);
    
    return this.http.get<PostComment[]>(newApi);
  } 
}
