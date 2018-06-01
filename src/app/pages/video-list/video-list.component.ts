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
  albumId: string = "";

  totalItems: number = 0;
  itemsPerPage: number = 8;
  currentPage: number = 1;
  totalPages: number;

  constructor(private onlineService: OnlineService,
    private activatedRoute: ActivatedRoute) {
      this.activatedRoute.queryParams.subscribe(params => {
        this.albumId = params['album'];
        
        this.onlineService.srvAlbumDetail(this.albumId)
          .subscribe(
            res => {
              this.albumInfo = JSON.parse(res['_body']);
            },
            err => console.log(err)
          )

          this.getVideos();
      });
   }

  ngOnInit() {
  }

  pageChanged(event) {
    this.itemsPerPage = event.itemsPerPage;
    this.currentPage = event.page;
    this.getVideos();
  }

  getVideos() {
    this.medias = [];
    let index = (this.currentPage - 1) * this.itemsPerPage;
    this.onlineService.srvMediaGetByAlbum(this.albumId, index, this.itemsPerPage)
    .subscribe(
      res => {
        this.medias = JSON.parse(res['_body']);
        if (this.medias.length > 0) {
          this.totalItems = this.medias[0].TotalMedias;
          this.totalPages = Math.floor((this.totalItems / this.itemsPerPage) + (this.totalItems % this.itemsPerPage == 0 ? 0 : 1));
        }
      },
      err => console.log(err)
    )
  }
}
