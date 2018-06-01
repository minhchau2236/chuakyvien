import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Media, MediaAlbum } from '../../models/media.model';
import { OnlineService } from '../../services/online.service';

@Component({
  selector: 'app-photo-display',
  templateUrl: './photo-display.component.html',
  styleUrls: []
})
export class PhotoDisplayComponent implements OnInit {
  public href: string = "";
  album = new MediaAlbum("", "", "Đang tải", "");

  medias: Media[] = [];

  constructor(private onlineService: OnlineService,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      let albumId = params['id'];
      this.onlineService.srvAlbumDetail(albumId)
        .subscribe(
          res => {
            this.album = JSON.parse(res['_body']);
          },
          err => console.log(err)
        )

      this.onlineService.srvMediaGetByAlbum(albumId, 0, 0)
        .subscribe(
          res => {
            this.medias = JSON.parse(res['_body']);
          },
          err => console.log(err)
        )
    });

  }

  ngOnInit() {
    this.href = window.location.href;
  }

}
