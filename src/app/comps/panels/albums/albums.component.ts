import { Component, OnInit } from '@angular/core';
import { Album } from '../../../models/album';
import { AlbumService } from '../../../services/album.service';
import { PagingService } from '../../../services/paging.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums:Album[]=[]
  constructor(public albumService:AlbumService, public paging:PagingService,public router:Router) { }

  ngOnInit() {
    this.albumService.getUserAlbums()
      .subscribe(data =>this.albums = data)
    setTimeout(console.log,2000,[this.albums]);
  }

  showAlbumPhotos(album:Album){
    this.albumService.currentAlbum = album;
    // this.paging.currentPanel = 'photos';
    this.router.navigateByUrl('/photos');

  }

}
