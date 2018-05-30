import { Component, OnInit } from '@angular/core';
import { BookCollection } from '../../models/book.model';
import { OnlineService } from '../../services/online.service';
import { MediaAlbum } from '../../models/media.model';

@Component({
  selector: 'app-footer-contain',
  templateUrl: './footer-contain.component.html',
  styleUrls: []
})
export class FooterContainComponent implements OnInit {
  bookcollections: BookCollection[] = [];
  mediaalbums:MediaAlbum[] = [];

  constructor(private onlineService: OnlineService) {
    this.onlineService.srvBookCollectionGetAll()
      .subscribe(
        res => {
          this.bookcollections = JSON.parse(res['_body']);
        },
        err => console.log(err)
      )
      this.onlineService.srvAlbumGetByType("ALL")
      .subscribe(
        res => {
          this.mediaalbums = JSON.parse(res['_body']);
        },
        err => console.log(err)
      )
  }

  ngOnInit() {
  }

  filterVideoAlbums() {
    return this.mediaalbums.filter(x => x.MediaType == "video");
  }

  filterPhotoAlbums() {
    return this.mediaalbums.filter(x => x.MediaType == "photo");
  }

}
