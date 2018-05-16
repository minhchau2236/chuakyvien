import { Component, OnInit } from '@angular/core';
import { MediaAlbum } from '../../models/media.model';
import { OnlineService } from '../../services/online.service';

@Component({
  selector: 'app-video-albums',
  templateUrl: './video-albums.component.html',
  styleUrls: []
})
export class VideoAlbumsComponent implements OnInit {
  albums: MediaAlbum[] = [];
  constructor(private onlineService: OnlineService) {
    this.onlineService.srvAlbumGetByType("video")
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
