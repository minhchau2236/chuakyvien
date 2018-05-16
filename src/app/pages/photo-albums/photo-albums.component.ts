import { Component, OnInit } from '@angular/core';
import { MediaAlbum } from '../../models/media.model';
import { OnlineService } from '../../services/online.service';

@Component({
  selector: 'app-photo-albums',
  templateUrl: './photo-albums.component.html',
  styleUrls: []
})
export class PhotoAlbumsComponent implements OnInit {
  albums: MediaAlbum[] = [];
  constructor(private onlineService: OnlineService) {
    this.onlineService.srvAlbumGetByType("photo")
      .subscribe(
        res => {
          this.albums = JSON.parse(res['_body']);
        },
        err => console.log(err)
      )
  }

  ngOnInit() {
  }

}
