import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Media, MediaAlbum } from '../../models/media.model';
import { OnlineService } from '../../services/online.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: []
})
export class VideoListComponent implements OnInit {
  medias: Media[] = []
  albumInfo: MediaAlbum = new MediaAlbum("", "", "Video", "");

  constructor(private onlineService: OnlineService,
    private activatedRoute: ActivatedRoute) {
      this.activatedRoute.queryParams.subscribe(params => {
        let album = params['album'];
        this.onlineService.srvMediaGetByAlbum(album, 0, 0)
          .subscribe(
            res => {
              this.medias = JSON.parse(res['_body']);
            },
            err => console.log(err)
          )
        this.onlineService.srvAlbumDetail(album)
          .subscribe(
            res => {
              this.albumInfo = JSON.parse(res['_body']);
            },
            err => console.log(err)
          )
      });
   }

  ngOnInit() {
  }

}
