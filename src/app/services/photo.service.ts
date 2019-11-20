import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumService } from './album.service';
import { Photo } from '../models/photo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private apiByAlbum = "https://jsonplaceholder.typicode.com/photos?albumId=#"
  constructor(private http:HttpClient, public albumService:AlbumService) { }

  public getPhotosByAlbum():Observable<Photo[]>{
    return this.http.get<Photo[]>(
      this.apiByAlbum.replace("#",this.albumService.currentAlbum.userId.toString())
    )
  }
}
