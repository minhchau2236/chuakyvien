import { Component, OnInit } from '@angular/core';
import { Topic } from '../../models/topic.model';
import { OnlineService } from '../../services/online.service';

@Component({
  selector: 'app-list-topic',
  templateUrl: './list-topic.component.html',
  styleUrls: []
})
export class ListTopicComponent implements OnInit {
  topics: Topic[] = [
    new Topic("", "list-topic", "Đang lấy dữ liệu...", "")
  ];

  constructor(private onlineService: OnlineService) {
    this.onlineService.srvTopicGetAll()
      .subscribe(
        res => {
          this.topics = JSON.parse(res['_body']);
        },
        err => console.log(err)
      )
  }

  ngOnInit() {
  }

}
