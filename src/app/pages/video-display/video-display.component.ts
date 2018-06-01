import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Media } from '../../models/media.model';
import { OnlineService } from '../../services/online.service';

@Component({
  selector: 'app-video-display',
  templateUrl: './video-display.component.html',
  styleUrls: []
})
export class VideoDisplayComponent implements OnInit {
  public href: string = "";
  media: Media = new Media("", "", "", "", 0);
  relatedMedias: Media[] = [];
  mediaUrl: string = "";

  constructor(private onlineService: OnlineService,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.mediaUrl = params['id'];
      this.onlineService.srvMediaDetail(this.mediaUrl)
        .subscribe(
          res => {
            this.media = JSON.parse(res['_body']);
          },
          err => console.log(err)
        )
      this.getRelatedMedias();
    });
  }

  ngOnInit() {
    this.href = window.location.href;
  }

  getRelatedMedias() {
    this.relatedMedias = [];
    this.onlineService.srvMediaGetRelated(this.mediaUrl)
      .subscribe(
        res => {
          this.relatedMedias = JSON.parse(res['_body']);
        },
        err => console.log(err)
      )
  }

}
