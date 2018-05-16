import { Component, OnInit, Input } from '@angular/core';
import { Media } from '../../../../models/media.model';
import { OnlineService } from '../../../../services/online.service';

@Component({
  selector: 'app-home-introduce-video-list',
  templateUrl: './home-introduce-video-list.component.html',
  styleUrls: []
})
export class HomeIntroduceVideoListComponent implements OnInit {
  @Input() albumId: string;
  medias: Media[] = [];

  constructor(private onlineService: OnlineService) { }

  ngOnInit() {
    this.onlineService.srvMediaGetByAlbum(this.albumId, 0, 6)
      .subscribe(
        res => {
          this.medias = JSON.parse(res['_body']);
        },
        err => console.log(err)
      )
   }
}
