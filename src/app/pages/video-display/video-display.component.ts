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
  media:Media = new Media("", "", "", "", 0);

  constructor(private onlineService: OnlineService,
    private activatedRoute: ActivatedRoute) {
      this.activatedRoute.queryParams.subscribe(params => {
        let id = params['id'];
        this.onlineService.srvMediaDetail(id)
          .subscribe(
            res => {
              this.media = JSON.parse(res['_body']);
            },
            err => console.log(err)
          )
      });
   }

  ngOnInit() {
  }

}
