import { Component, OnInit } from '@angular/core';
import { OnlineService } from '../../../services/online.service';
import { MediaAlbum, Media } from '../../../models/media.model';

@Component({
  selector: 'app-home-introduce-video',
  templateUrl: './home-introduce-video.component.html',
  styleUrls: []
})
export class HomeIntroduceVideoComponent implements OnInit {
  media: Media = new Media("", "", "Đang tải video", "", 0);
  firstMediaUrl: string;

  constructor(private onlineService: OnlineService) {
    this.onlineService.srvMediaNewByType("video")
      .subscribe(
        res => {
          this.media = JSON.parse(res['_body']);
          this.firstMediaUrl = "/resources/videos/" + this.media.MediaId;
        },
        err => console.log(err)
      )
   }

  ngOnInit() {
    
  }
}