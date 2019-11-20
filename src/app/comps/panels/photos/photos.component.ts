import { Component, OnInit } from '@angular/core';
import { Photo } from '../../../models/photo';
import { PhotoService } from '../../../services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos:Photo[]=[]
  constructor(public photoService:PhotoService) { }

  ngOnInit() {
    this.photoService.getPhotosByAlbum()
      .subscribe(data=>this.photos=data);
    setTimeout(console.log,2000,[this.photos]);
    
  }

}
