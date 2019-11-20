import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  currentAlbum:Album
  private api = "https://jsonplaceholder.typicode.com/posts?userId=#"

  constructor(private http:HttpClient, public userService:UserService) { }

  public getUserAlbums():Observable<Album[]>{
    return this.http.get<Album[]>
      (this.api.replace("#",this.userService.currentUser.id.toString()));
  }
}
